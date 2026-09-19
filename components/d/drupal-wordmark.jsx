import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v777khbiw.css';
import '../../css/a/a2-ttn8jg.css';
import '../../css/i/i5wi-07eg.css';
import '../../css/e/eltux0bcv.css';
import '../../css/y/yx0o06bht.css';
import '../../css/i/i5ctbtbxz.css';
import '../../css/a/a-8tieo0e.css';
import '../../css/d/dz73m5jbx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v777khbiw"/><path class="a2-ttn8jg"/><path class="i5wi-07eg"/><path class="eltux0bcv"/><path class="yx0o06bht"/><path class="i5ctbtbxz"/><path class="a-8tieo0e"/><path class="dz73m5jbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:drupal-wordmark"} {...others} />);
}

export default Component;
