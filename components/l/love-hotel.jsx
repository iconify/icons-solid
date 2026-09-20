import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fsewyjy.css';
import '../../css/n/naw3jli5a.css';
import '../../css/s/s_r7l4bnq.css';
import '../../css/p/p9409nktb.css';
import '../../css/s/skaumjuwt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o_ofldbtl.css';
import '../../css/j/j_68vhb_u.css';
import '../../css/d/dsgwgdcbq.css';
import '../../css/w/w42ttubrn.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e3fsewyjy"><path class="naw3jli5a"/><path class="s_r7l4bnq"/><path class="p9409nktb"/><path class="skaumjuwt"/></g><g class="jn8qy4bru"><path class="o_ofldbtl"/><path class="j_68vhb_u"/><path class="dsgwgdcbq"/><path class="w42ttubrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:love-hotel"} {...others} />);
}

export default Component;
