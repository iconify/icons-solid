import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7ilcxb3j.css';
import '../../css/p/prq9nybvi.css';
import '../../css/e/exlutqbvg.css';
import '../../css/s/s64hpnbks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7ilcxb3j"/><path class="prq9nybvi"/><path class="exlutqbvg"/><path clip-rule="evenodd" class="s64hpnbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-outline"} {...others} />);
}

export default Component;
