import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhqo72oqm.css';
import '../../css/f/finapzdrt.css';
import '../../css/c/c1qnc2b2k.css';
import '../../css/a/amq39knvl.css';
import '../../css/w/w1mdh8e6f.css';
import '../../css/y/yxq2s1cwr.css';
import '../../css/u/ukgkpvmjt.css';
import '../../css/u/usgfxmbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bhqo72oqm wm-shadow"/><path class="finapzdrt wm-k"/><path class="c1qnc2b2k wm-k"/><path class="amq39knvl wm-k"/><path class="w1mdh8e6f wm-k"/><path class="wm-k yxq2s1cwr"/><path class="ukgkpvmjt wm-shine"/><path class="usgfxmbpn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:fingerprint"} {...others} />);
}

export default Component;
