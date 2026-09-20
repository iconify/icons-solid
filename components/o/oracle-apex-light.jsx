import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0st5ibry.css';
import '../../css/a/a_m-kxrza.css';
import '../../css/b/bhwe2e32e.css';
import '../../css/r/retkm6b-b.css';
import '../../css/k/ktp8ksbok.css';
import '../../css/w/wbn2top-b.css';
import '../../css/n/nx8uhqcpv.css';
import '../../css/q/qt3mzpb7j.css';
import '../../css/x/xm18i8bvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0st5ibry"/><path class="a_m-kxrza"/><path class="bhwe2e32e"/><path class="retkm6b-b"/><path class="ktp8ksbok"/><path class="wbn2top-b"/><path class="nx8uhqcpv"/><path class="qt3mzpb7j"/><path class="xm18i8bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oracle-apex-light"} {...others} />);
}

export default Component;
