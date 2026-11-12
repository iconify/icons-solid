import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo23aj6tx.css';
import '../../css/l/lfvsq0b3f.css';
import '../../css/c/ccqymhpos.css';
import '../../css/f/fdv3dhems.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGwklnjR8C" x1="351.3" x2="124.8" y1="387.2" y2="387.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="xo23aj6tx"/><stop offset="1" class="lfvsq0b3f"/></linearGradient><path fill="url(#SVGwklnjR8C)" class="ccqymhpos"/><path class="fdv3dhems"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:interactive-brokers"} {...others} />);
}

export default Component;
