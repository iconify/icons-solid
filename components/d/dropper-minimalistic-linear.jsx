import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avntskb1y.css';
import '../../css/j/j45ubn33o.css';
import '../../css/t/t53txddyt.css';
import '../../css/b/bmcnrqhxn.css';
import '../../css/d/dlm0nfcry.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/z/zfge7hb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="avntskb1y"/><path class="j45ubn33o"/><path class="t53txddyt"/><path class="bmcnrqhxn"/><path class="dlm0nfcry"/><path class="pq5xj2bli"/><path class="zfge7hb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-linear"} {...others} />);
}

export default Component;
