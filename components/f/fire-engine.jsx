import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj57y5e6u.css';
import '../../css/c/cf10y0bpw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bj57y5e6u"/><path class="cf10y0bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:fire-engine"} {...others} />);
}

export default Component;
