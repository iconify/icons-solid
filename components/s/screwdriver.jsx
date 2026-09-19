import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3lgujbly.css';
import '../../css/n/n_t-mnb1u.css';
import '../../css/t/tr7-8zb1d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p3lgujbly"/><path class="n_t-mnb1u"/><path class="tr7-8zb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:screwdriver"} {...others} />);
}

export default Component;
