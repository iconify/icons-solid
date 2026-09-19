import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m-7o8veeh.css';
import '../../css/k/k3m1ttb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m-7o8veeh"/><path class="k3m1ttb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-full-view"} {...others} />);
}

export default Component;
