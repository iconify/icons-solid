import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrige0blm.css';
import '../../css/z/zfdnpg4hn.css';
import '../../css/v/vuz6xkdnh.css';
import '../../css/x/x704a9b2y.css';
import '../../css/c/c1w9jrbtd.css';
import '../../css/w/wmqll1_my.css';
import '../../css/m/mhbby9g4h.css';
import '../../css/d/dq_bw-bcf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wrige0blm"/><path clip-rule="evenodd" class="zfdnpg4hn"/><path class="vuz6xkdnh"/><path clip-rule="evenodd" class="x704a9b2y"/><path class="c1w9jrbtd"/><path clip-rule="evenodd" class="wmqll1_my"/><path class="mhbby9g4h"/><path clip-rule="evenodd" class="dq_bw-bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:view-page-all-16"} {...others} />);
}

export default Component;
