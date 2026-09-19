import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh7jpabfb.css';
import '../../css/g/gak2xbgdu.css';
import '../../css/h/hs9m8_bbv.css';
import '../../css/b/bqa1tob7t.css';
import '../../css/m/mt44fjb8n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xh7jpabfb"/><path class="gak2xbgdu"/><path class="hs9m8_bbv"/><path class="bqa1tob7t"/><path class="mt44fjb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:google"} {...others} />);
}

export default Component;
