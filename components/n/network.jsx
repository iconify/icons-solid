import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/m8oaejmri.css';
import '../../css/v/v_-7qcbcl.css';
import '../../css/d/ddrs4k5sf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwy9i8drk" x1="8.99" x2="14.99" y1="1.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwy9i8drk)" class="m8oaejmri"/><path class="v_-7qcbcl wm-a"/><path class="ddrs4k5sf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:network"} {...others} />);
}

export default Component;
