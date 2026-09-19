import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r8hbf0bbc.css';
import '../../css/b/braw9ubfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r8hbf0bbc"/><path class="braw9ubfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mails"} {...others} />);
}

export default Component;
