import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2wxzwt9z.css';
import '../../css/t/t01qni1jx.css';
import '../../css/t/tbv_7yb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle transform="matrix(1 0 0 -1 16 8)" class="u2wxzwt9z"/><path class="t01qni1jx"/><path class="tbv_7yb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tag-01"} {...others} />);
}

export default Component;
