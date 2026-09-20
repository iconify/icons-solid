import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y675n7baj.css';
import '../../css/g/g2mwm83ed.css';
import '../../css/a/a6_2e5bzv.css';
import '../../css/o/o73_kmb9t.css';
import '../../css/l/lppieibrp.css';
import '../../css/a/aidlx9b9t.css';
import '../../css/b/begp-rsdq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y675n7baj"/><path class="g2mwm83ed"/><path class="a6_2e5bzv"/><path class="o73_kmb9t"/><linearGradient id="SVGX2tehdGO" x1="243.022" x2="172.722" y1="152.448" y2="152.448" gradientTransform="matrix(1 0 0 -1 0 513.598)" gradientUnits="userSpaceOnUse"><stop offset="0" class="lppieibrp"/><stop offset="1" class="aidlx9b9t"/></linearGradient><path fill="url(#SVGX2tehdGO)" class="begp-rsdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qdrant"} {...others} />);
}

export default Component;
