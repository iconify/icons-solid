import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc1ktdbia.css';
import '../../css/a/ai4tc8bwr.css';
import '../../css/r/rm0esacjp.css';
import '../../css/c/c1kr50blz.css';
import '../../css/o/o-dz1zbkz.css';
import '../../css/i/ipgkmubya.css';
import '../../css/g/g4-gpgbbr.css';
import '../../css/n/nbcgffbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vc1ktdbia wm-shadow"/><path class="ai4tc8bwr wm-k"/><path class="rm0esacjp wm-k"/><path class="c1kr50blz wm-k"/><path class="o-dz1zbkz wm-k"/><path class="ipgkmubya wm-shine"/><path class="g4-gpgbbr wm-k"/><path class="nbcgffbpv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:ear"} {...others} />);
}

export default Component;
