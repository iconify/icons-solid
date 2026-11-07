import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kngzmjb8s.css';
import '../../css/g/g0-11mmdk.css';
import '../../css/g/g23e_tb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kngzmjb8s"/><path class="g0-11mmdk"/><path class="g23e_tb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-bold-duotone"} {...others} />);
}

export default Component;
