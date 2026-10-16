import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amj4c2nxb.css';
import '../../css/a/aeedgejmb.css';
import '../../css/k/k9lxbgstm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="amj4c2nxb"/><path class="aeedgejmb"/><path class="k9lxbgstm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-meter-20-bold"} {...others} />);
}

export default Component;
