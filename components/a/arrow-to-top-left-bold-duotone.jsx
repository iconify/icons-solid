import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxuh4t3_e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w10tlo1bi.css';
import '../../css/n/nb7gx3byg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fxuh4t3_e"/><g class="xtpeb-edw"><path class="w10tlo1bi"/><path class="nb7gx3byg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-top-left-bold-duotone"} {...others} />);
}

export default Component;
