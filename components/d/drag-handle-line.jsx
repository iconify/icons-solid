import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf-aybsq.css';
import '../../css/s/sdkxt-e8g.css';
import '../../css/d/dx8qe1_uy.css';
import '../../css/x/x81j85bfn.css';
import '../../css/j/j0od6du1i.css';
import '../../css/f/fu-1_0bbg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 kuf-aybsq"/><circle class="clr-i-outline clr-i-outline-path-2 sdkxt-e8g"/><circle class="clr-i-outline clr-i-outline-path-3 dx8qe1_uy"/><circle class="clr-i-outline clr-i-outline-path-4 x81j85bfn"/><circle class="clr-i-outline clr-i-outline-path-5 j0od6du1i"/><circle class="clr-i-outline clr-i-outline-path-6 fu-1_0bbg"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:drag-handle-line"} {...others} />);
}

export default Component;
