import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_v1zhbtb.css';
import '../../css/d/d5acjcb7w.css';
import '../../css/u/u2kjx6byn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a_v1zhbtb"/><path class="d5acjcb7w"/><path class="u2kjx6byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-in-manual-wheelchair-facing-right"} {...others} />);
}

export default Component;
