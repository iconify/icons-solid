import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px9p0nb-c.css';
import '../../css/e/epyv5-bje.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="px9p0nb-c"/><path class="epyv5-bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-dead-end"} {...others} />);
}

export default Component;
