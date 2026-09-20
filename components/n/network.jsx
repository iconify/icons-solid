import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uby_i-f3e.css';
import '../../css/c/chxgk_bzm.css';
import '../../css/n/nete0g-yd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uby_i-f3e"/><path class="chxgk_bzm"/><path class="nete0g-yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:network"} {...others} />);
}

export default Component;
