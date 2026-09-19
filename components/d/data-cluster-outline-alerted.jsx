import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcfdmshpr.css';
import '../../css/l/lkpcwkt2z.css';
import '../../css/o/ozuwih2am.css';
import '../../css/m/mi9sxk6yg.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted zcfdmshpr"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted lkpcwkt2z"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted ozuwih2am"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted mi9sxk6yg"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:data-cluster-outline-alerted"} {...others} />);
}

export default Component;
