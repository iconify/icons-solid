import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz_vbibin.css';
import '../../css/x/xb-o3nqnz.css';
import '../../css/u/u_ozfpbev.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="qz_vbibin"/><path class="xb-o3nqnz"/><path class="u_ozfpbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:wallet-outline"} {...others} />);
}

export default Component;
