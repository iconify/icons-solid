import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i89nsvvof.css';
import '../../css/l/lppcthv9a.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="i89nsvvof"/><path class="lppcthv9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:postage-heart"} {...others} />);
}

export default Component;
