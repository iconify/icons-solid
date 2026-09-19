import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tevor1ebn.css';
import '../../css/v/vjgsxq_aq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tevor1ebn"/><path class="vjgsxq_aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:page-facing-up"} {...others} />);
}

export default Component;
