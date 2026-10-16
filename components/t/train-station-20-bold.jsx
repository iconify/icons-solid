import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-s5y9dn.css';
import '../../css/k/knun7bcjk.css';
import '../../css/m/mk8o-v1jo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="to-s5y9dn"/><path class="knun7bcjk"/><path class="mk8o-v1jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-station-20-bold"} {...others} />);
}

export default Component;
