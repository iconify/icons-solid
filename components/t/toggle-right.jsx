import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m996b6byz.css';
import '../../css/k/kcpp1x41e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m996b6byz"/><path class="kcpp1x41e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:toggle-right"} {...others} />);
}

export default Component;
