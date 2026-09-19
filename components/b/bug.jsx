import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdkt96b7u.css';
import '../../css/h/hfzaf2b6v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hdkt96b7u"/><path class="hfzaf2b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:bug"} {...others} />);
}

export default Component;
