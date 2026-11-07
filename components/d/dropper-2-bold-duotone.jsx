import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iarlldbsb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jqn9_xd9g.css';
import '../../css/l/lrmsywbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iarlldbsb"/><g class="xtpeb-edw"><path class="jqn9_xd9g"/><path class="lrmsywbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-2-bold-duotone"} {...others} />);
}

export default Component;
