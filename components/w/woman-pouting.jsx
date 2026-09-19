import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oefnjk4zl.css';
import '../../css/w/wfdf_i74f.css';
import '../../css/v/v2ozfsb-w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="oefnjk4zl"/><path class="wfdf_i74f"/><path class="v2ozfsb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-pouting"} {...others} />);
}

export default Component;
