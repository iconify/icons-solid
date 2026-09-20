import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd34ufbix.css';
import '../../css/d/d7ij-sbfu.css';
import '../../css/v/vo7rh1bfv.css';
import '../../css/d/dohdqbcqy.css';
import '../../css/t/ti0040bya.css';
import '../../css/o/o32t3bbve.css';
import '../../css/s/sgpeg7uli.css';
import '../../css/c/cxfzw4m6c.css';
import '../../css/i/ixcglbbxb.css';
import '../../css/y/y-avsrb8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vd34ufbix"/><path class="d7ij-sbfu"/><path class="vo7rh1bfv"/><path class="dohdqbcqy"/><path class="ti0040bya"/><path class="o32t3bbve"/><path class="sgpeg7uli"/><path class="cxfzw4m6c"/><path class="ixcglbbxb"/><path class="y-avsrb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bichon"} {...others} />);
}

export default Component;
