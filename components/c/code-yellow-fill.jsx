import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpont7bcl.css';
import '../../css/l/litqmtb2x.css';
import '../../css/h/hpoct_rnw.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGrE4WgcpM" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="lpont7bcl"/><stop offset=".5" class="lpont7bcl"/><stop offset="1" class="litqmtb2x"/></linearGradient></defs><path fill="url(#SVGrE4WgcpM)" class="hpoct_rnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-yellow-fill"} {...others} />);
}

export default Component;
