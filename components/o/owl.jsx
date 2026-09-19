import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4tjqnb1h.css';
import '../../css/w/weut74b7u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="l4tjqnb1h"/><path class="weut74b7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:owl"} {...others} />);
}

export default Component;
