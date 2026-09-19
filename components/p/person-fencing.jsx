import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky1fo0cqv.css';
import '../../css/l/l6pf8oj4c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ky1fo0cqv"/><path class="l6pf8oj4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-fencing"} {...others} />);
}

export default Component;
