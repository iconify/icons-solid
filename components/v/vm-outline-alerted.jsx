import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d52ac2uyu.css';
import '../../css/a/aqjjqfbsu.css';
import '../../css/i/id706cc0f.css';
import '../../css/x/xb3v72bvi.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted d52ac2uyu"/><path class="aqjjqfbsu clr-i-outline--alerted clr-i-outline-path-2--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted id706cc0f"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted xb3v72bvi"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:vm-outline-alerted"} {...others} />);
}

export default Component;
