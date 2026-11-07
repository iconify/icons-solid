import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/istl8mb1s.css';
import '../../css/o/oid5rccnd.css';
import '../../css/b/b3f_00ucw.css';
import '../../css/g/g4wbobeno.css';
import '../../css/q/qpw9ik4cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="istl8mb1s"/><path class="oid5rccnd"/><path clip-rule="evenodd" class="b3f_00ucw"/><path class="g4wbobeno"/><path clip-rule="evenodd" class="qpw9ik4cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-outline"} {...others} />);
}

export default Component;
