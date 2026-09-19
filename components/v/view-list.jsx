import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is4hisb1q.css';
import '../../css/v/vsyz1bb6k.css';
import '../../css/e/eskvnvbzu.css';
import '../../css/m/mektsvb4o.css';
import '../../css/i/ic-fv0b_e.css';
import '../../css/d/dhra9cbgm.css';
import '../../css/p/pt5qo6b2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="is4hisb1q"/><path class="vsyz1bb6k"/><path class="eskvnvbzu"/><path class="mektsvb4o"/><path clip-rule="evenodd" class="ic-fv0b_e"/><path clip-rule="evenodd" class="dhra9cbgm"/><path clip-rule="evenodd" class="pt5qo6b2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:view-list"} {...others} />);
}

export default Component;
