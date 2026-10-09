import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp3sh4q-z.css';
import '../../css/c/co-d1_b7k.css';
import '../../css/t/tbph25zil.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vp3sh4q-z"/><path class="co-d1_b7k"/><path class="tbph25zil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-sock-20"} {...others} />);
}

export default Component;
