import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/s/ss60qzbvo.css';
import '../../css/z/zlms2bb-e.css';
import '../../css/j/j_hdszcam.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="ss60qzbvo"/><path class="zlms2bb-e"/><path class="j_hdszcam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:stylelint"} {...others} />);
}

export default Component;
