import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ez_a0yb5j.css';
import '../../css/r/r4mcw20-b.css';
import '../../css/f/f62cwpbfr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ez_a0yb5j"/><path clip-rule="evenodd" class="r4mcw20-b"/><path class="f62cwpbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:head-shaking-vertically"} {...others} />);
}

export default Component;
