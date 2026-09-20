import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbafr4bpn.css';
import '../../css/q/qw4-ijfxu.css';
import '../../css/d/dotup_wmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xbafr4bpn"/><rect class="qw4-ijfxu"/><path class="dotup_wmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:desk-duotone-line"} {...others} />);
}

export default Component;
