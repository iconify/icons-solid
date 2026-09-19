import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxybk_snf.css';
import '../../css/e/ei1kw8ohy.css';
import '../../css/e/e64o1_b9t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rxybk_snf"/><path class="ei1kw8ohy"/><path class="e64o1_b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rightwards-pushing-hand-light"} {...others} />);
}

export default Component;
