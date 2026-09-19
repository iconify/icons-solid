import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfrjrd8qn.css';
import '../../css/j/jxfl46bls.css';
import '../../css/h/hfxcmzb3d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zfrjrd8qn"/><path class="jxfl46bls"/><path class="hfxcmzb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:backbonejs-wordmark"} {...others} />);
}

export default Component;
