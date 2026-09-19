import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf9v9teof.css';
import '../../css/z/zaydmwbwh.css';
import '../../css/t/t4nnhmndk.css';
import '../../css/g/g04gfaccp.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted lf9v9teof"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted zaydmwbwh"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted t4nnhmndk"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted g04gfaccp"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:backup-outline-alerted"} {...others} />);
}

export default Component;
