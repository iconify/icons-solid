import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9aia9hpz.css';
import '../../css/p/pugdz89pv.css';
import '../../css/w/w9qp1h67f.css';
import '../../css/q/qfphbb72u.css';
import '../../css/d/djucbdc3s.css';
import '../../css/a/ahps_9uuz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j9aia9hpz"/><path class="pugdz89pv"/><path class="w9qp1h67f"/><path class="qfphbb72u"/><path class="djucbdc3s"/><path class="ahps_9uuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hotel"} {...others} />);
}

export default Component;
