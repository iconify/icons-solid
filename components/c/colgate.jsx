import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/su-ehlb8y.css';
import '../../css/a/alu2ms6-o.css';

const viewBox = {"width":249,"height":33};
const content = `<g class="ft5dv1b6b"><path class="su-ehlb8y"/><path class="alu2ms6-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:colgate"} {...others} />);
}

export default Component;
