import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpfeuxjdz.css';
import '../../css/t/tm7ugwdtg.css';
import '../../css/j/j443sab0r.css';
import '../../css/k/kse1jgbfp.css';
import '../../css/a/al5isxjcm.css';
import '../../css/d/dgxr_vbkp.css';
import '../../css/w/wdwbik37h.css';
import '../../css/t/t13i2_bml.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="cpfeuxjdz"/><path class="tm7ugwdtg"/><path class="j443sab0r"/><path class="kse1jgbfp"/><path class="al5isxjcm"/><path class="dgxr_vbkp"/><path class="wdwbik37h"/><path class="t13i2_bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:united-kingdom"} {...others} />);
}

export default Component;
