import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp1yeqapm.css';
import '../../css/e/eiuqgxbvt.css';
import '../../css/u/uec7k_kii.css';
import '../../css/r/r9swzbgrg.css';
import '../../css/f/f62v67b8e.css';
import '../../css/y/yg-lybc_k.css';
import '../../css/e/ephx-fbql.css';
import '../../css/j/jaexw4b6h.css';
import '../../css/f/fd977nuwz.css';
import '../../css/m/m0_xsjsxv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fp1yeqapm"/><path class="eiuqgxbvt"/><path class="uec7k_kii"/><path class="r9swzbgrg"/><path class="f62v67b8e"/><path class="yg-lybc_k"/><path class="ephx-fbql"/><path class="jaexw4b6h"/><path class="fd977nuwz"/><path class="m0_xsjsxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-ice-cream"} {...others} />);
}

export default Component;
