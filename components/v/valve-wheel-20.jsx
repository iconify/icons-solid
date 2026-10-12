import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6sb2hngk.css';
import '../../css/h/hvcttkn8s.css';
import '../../css/q/qtozcib7o.css';
import '../../css/w/wyzn1emnh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n6sb2hngk"/><path class="hvcttkn8s"/><path class="qtozcib7o"/><path class="wyzn1emnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:valve-wheel-20"} {...others} />);
}

export default Component;
