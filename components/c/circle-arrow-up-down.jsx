import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/t/t_d2ayb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="kmnr8jx4o"/><path class="t_d2ayb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-arrow-up-down"} {...others} />);
}

export default Component;
