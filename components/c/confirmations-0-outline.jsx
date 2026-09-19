import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl48nf4cu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl48nf4cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-0-outline"} {...others} />);
}

export default Component;
