import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/d/d1iuoeb3y.css';
import '../../css/d/d3co6xbya.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="d1iuoeb3y"/><path class="d3co6xbya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:circle-ci"} {...others} />);
}

export default Component;
