import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x9tlpeb-b.css';
import '../../css/b/bhtzexbvl.css';
import '../../css/m/mu1binbsn.css';
import '../../css/l/lzvy5umxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x9tlpeb-b"/><path class="bhtzexbvl wm-shadow"/><path class="mu1binbsn"/><path class="lzvy5umxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:basketball"} {...others} />);
}

export default Component;
