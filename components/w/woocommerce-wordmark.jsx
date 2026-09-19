import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv3n7ebil.css';
import '../../css/f/f--feebbp.css';
import '../../css/a/abtx30h0p.css';
import '../../css/k/kd7vgqb6g.css';
import '../../css/o/ogs17-uwl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kv3n7ebil"/><path class="f--feebbp"/><path class="abtx30h0p"/><path class="kd7vgqb6g"/><path class="ogs17-uwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:woocommerce-wordmark"} {...others} />);
}

export default Component;
