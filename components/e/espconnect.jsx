import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfmaj0bsk.css';
import '../../css/p/pcqj9r9mm.css';
import '../../css/o/od92dhlsp.css';
import '../../css/r/r2zs8ibbn.css';
import '../../css/f/fqgdc-bqu.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGMmwKCbws" x1="-703.737" x2="-703.263" y1="796" y2="796" gradientTransform="matrix(0 1080 1080 0 -859424 760036)" gradientUnits="userSpaceOnUse"><stop offset="0" class="kfmaj0bsk"/><stop offset="1" class="pcqj9r9mm"/></linearGradient><path fill="url(#SVGMmwKCbws)" class="od92dhlsp"/><path class="r2zs8ibbn"/><path class="fqgdc-bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:espconnect"} {...others} />);
}

export default Component;
