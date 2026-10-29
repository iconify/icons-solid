import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3b097rgw.css';
import '../../css/a/a2b4sw3wi.css';
import '../../css/g/g4osoo17c.css';
import '../../css/n/nk88kz_wl.css';
import '../../css/l/lov5-ks-d.css';
import '../../css/d/duqoq9b-b.css';
import '../../css/i/i6_tijrdf.css';
import '../../css/m/ms-vpccfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m3b097rgw wm-shadow"/><path class="a2b4sw3wi wm-k"/><path class="g4osoo17c wm-k"/><path class="nk88kz_wl wm-k"/><path class="lov5-ks-d wm-k"/><path class="duqoq9b-b wm-k"/><path class="i6_tijrdf wm-shine"/><path class="ms-vpccfn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cloud-rain"} {...others} />);
}

export default Component;
