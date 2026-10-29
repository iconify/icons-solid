import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdyn37bfp.css';
import '../../css/m/mtf2lkb-d.css';
import '../../css/n/n8_y97bnk.css';
import '../../css/p/pkayin37c.css';
import '../../css/t/t5prinbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdyn37bfp wm-a"/><path class="mtf2lkb-d wm-k"/><path class="n8_y97bnk wm-k"/><path class="pkayin37c wm-k"/><path class="t5prinbbz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rocket"} {...others} />);
}

export default Component;
