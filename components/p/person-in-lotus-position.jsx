import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x0q5tlb3j.css';
import '../../css/w/wvkhhwb5u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x0q5tlb3j"/><path class="wvkhhwb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-lotus-position"} {...others} />);
}

export default Component;
