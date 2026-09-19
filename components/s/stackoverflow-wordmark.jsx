import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqapy4bsh.css';
import '../../css/u/uy44wxbxz.css';
import '../../css/n/n230x8b_n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iqapy4bsh"/><path class="uy44wxbxz"/><path class="n230x8b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stackoverflow-wordmark"} {...others} />);
}

export default Component;
