import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxrry-bew.css';
import '../../css/q/q_k3wsbkz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nxrry-bew"/><path class="q_k3wsbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:google-streetview-solid"} {...others} />);
}

export default Component;
