import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfj6vnyiv.css';
import '../../css/m/mb6xo_c1z.css';
import '../../css/f/f2vt3zb5k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mfj6vnyiv"/><path class="mb6xo_c1z"/><path class="f2vt3zb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-office-worker"} {...others} />);
}

export default Component;
