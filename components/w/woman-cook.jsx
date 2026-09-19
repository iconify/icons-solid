import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6f4-hb9r.css';
import '../../css/h/htc50ab7y.css';
import '../../css/h/hioswgb-i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="q6f4-hb9r"/><path class="htc50ab7y"/><path class="hioswgb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-cook"} {...others} />);
}

export default Component;
