import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf_cs6bdq.css';
import '../../css/k/kyh3gn_rl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mf_cs6bdq"/><path class="kyh3gn_rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pipe-duotone"} {...others} />);
}

export default Component;
