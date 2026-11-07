import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxcq0gbtc.css';
import '../../css/n/n79s7ib_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxcq0gbtc"/><path clip-rule="evenodd" class="n79s7ib_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-opened-bold"} {...others} />);
}

export default Component;
