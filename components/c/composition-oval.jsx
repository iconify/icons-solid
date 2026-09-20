import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fblthabqz.css';
import '../../css/z/zxytat0ez.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fblthabqz"/><path class="zxytat0ez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:composition-oval"} {...others} />);
}

export default Component;
