import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2ux2-ptl.css';
import '../../css/h/hmctbtbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l2ux2-ptl"/><path class="hmctbtbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:logout"} {...others} />);
}

export default Component;
