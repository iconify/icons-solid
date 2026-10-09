import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg1we5wmy.css';
import '../../css/w/wz_jv-b9y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tg1we5wmy"/><path class="wz_jv-b9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-network-20"} {...others} />);
}

export default Component;
