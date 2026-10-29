import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n96fwtxot.css';
import '../../css/v/vsjtogmkk.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/x/xlgd4ijcu.css';
import '../../css/c/cokp-kbum.css';
import '../../css/a/a93l_aczn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n96fwtxot wm-deco"/><path class="vsjtogmkk wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="wm-k xlgd4ijcu"/><path class="cokp-kbum wm-s"/><path class="a93l_aczn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-closed-blueprint"} {...others} />);
}

export default Component;
