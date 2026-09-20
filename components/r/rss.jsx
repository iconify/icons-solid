import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmkmjhbou.css';
import '../../css/m/mnyhz-3oo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="mmkmjhbou"/><path class="mnyhz-3oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:rss"} {...others} />);
}

export default Component;
