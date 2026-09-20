import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo23aj6tx.css';
import '../../css/l/lfvsq0b3f.css';
import '../../css/c/ccqymhpos.css';
import '../../css/f/fdv3dhems.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGw4AkpdMm" x1="2136.942" x2="2363.435" y1="125.81" y2="125.81" gradientTransform="rotate(180 1244.122 256.5)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xo23aj6tx"/><stop offset="1" class="lfvsq0b3f"/></linearGradient><path fill="url(#SVGw4AkpdMm)" class="ccqymhpos"/><path class="fdv3dhems"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:interactive-brokers"} {...others} />);
}

export default Component;
