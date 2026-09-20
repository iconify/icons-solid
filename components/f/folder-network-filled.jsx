import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/w/wdlgln.css';
import '../../css/p/pdut_d.css';
import '../../css/y/y4wbml.css';
import '../../css/m/mhfxos.css';
import '../../css/q/qmc18a.css';
import '../../css/c/cv7-ts.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-c7v0ns.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-o0luwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew wdlgln"/><path class="iw1iew pdut_d y4wbml"/><path class="iw1iew mhfxos y4wbml"/><path class="iw1iew qmc18a y4wbml"/><path class="cv7-ts iw1iew y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-network-filled"} {...others} />);
}

export default Component;
