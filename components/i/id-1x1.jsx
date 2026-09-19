import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqxouj6yz.css';
import '../../css/a/amj-xlqvt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pqxouj6yz"/><path class="amj-xlqvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:id-1x1"} {...others} />);
}

export default Component;
