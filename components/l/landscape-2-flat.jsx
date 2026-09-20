import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sq6gxsdqc.css';
import '../../css/f/fp701sbwd.css';
import '../../css/f/f-_h6lber.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sq6gxsdqc"/><path clip-rule="evenodd" class="fp701sbwd"/><path class="f-_h6lber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:landscape-2-flat"} {...others} />);
}

export default Component;
