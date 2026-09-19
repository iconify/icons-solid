import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kyit_wccz.css';
import '../../css/b/bl-wuk3ho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kyit_wccz"/><path class="bl-wuk3ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:filter-mail-square"} {...others} />);
}

export default Component;
