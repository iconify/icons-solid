import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw1ek4bdx.css';
import '../../css/o/onak4teku.css';
import '../../css/l/lk6hvcojf.css';
import '../../css/a/arcoz4z5j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dw1ek4bdx"/><path class="onak4teku"/><path class="lk6hvcojf"/><path class="arcoz4z5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-mage"} {...others} />);
}

export default Component;
