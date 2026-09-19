import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n0o-7rbtu.css';
import '../../css/v/vuvruhbaa.css';
import '../../css/f/f3gxddcxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n0o-7rbtu"/><circle class="vuvruhbaa"/><path class="f3gxddcxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:caravan"} {...others} />);
}

export default Component;
