import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpg-nubov.css';
import '../../css/f/fhcl44oal.css';
import '../../css/q/qijlvrbjb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vpg-nubov"/><path class="fhcl44oal"/><path class="qijlvrbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:wireguard-wordmark"} {...others} />);
}

export default Component;
