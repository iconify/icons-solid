import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a510ge4pz.css';
import '../../css/k/k324ub9yz.css';
import '../../css/i/imtv-sn-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a510ge4pz"/><path class="k324ub9yz"/><path class="imtv-sn-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-2-bold-duotone"} {...others} />);
}

export default Component;
