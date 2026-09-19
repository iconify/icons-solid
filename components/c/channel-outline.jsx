import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lkjlz36vc.css';
import '../../css/u/ufw-idufz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="lkjlz36vc"/><path class="ufw-idufz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:channel-outline"} {...others} />);
}

export default Component;
