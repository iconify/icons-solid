import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/j/j8fzk2b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="kmnr8jx4o"/><path class="j8fzk2b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-arrow-left-right"} {...others} />);
}

export default Component;
