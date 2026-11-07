import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl1dehbpf.css';
import '../../css/y/ytsg6bbox.css';
import '../../css/o/ou67k_boh.css';
import '../../css/s/shyqp7s2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl1dehbpf"/><path class="ytsg6bbox"/><path class="ou67k_boh"/><path clip-rule="evenodd" class="shyqp7s2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-outline"} {...others} />);
}

export default Component;
