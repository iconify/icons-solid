import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n64j4pszt.css';
import '../../css/d/dug6n4miq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n64j4pszt"/><path class="dug6n4miq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:crying"} {...others} />);
}

export default Component;
