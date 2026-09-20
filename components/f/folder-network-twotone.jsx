import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/v/vkz-xs.css';
import '../../css/p/pdut_d.css';
import '../../css/y/y4wbml.css';
import '../../css/m/mosjig.css';
import '../../css/e/er1d7w.css';
import '../../css/q/qanl8c.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-c7v0ns.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-o0luwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew vkz-xs"/><path class="iw1iew pdut_d y4wbml"/><path class="iw1iew mosjig y4wbml"/><path class="er1d7w iw1iew y4wbml"/><path class="iw1iew qanl8c y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-network-twotone"} {...others} />);
}

export default Component;
