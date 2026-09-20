import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzt67molh.css';
import '../../css/z/z5g_35ygb.css';
import '../../css/a/aj705ab4l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rzt67molh"/><path class="z5g_35ygb"/><path class="aj705ab4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:watch-2"} {...others} />);
}

export default Component;
