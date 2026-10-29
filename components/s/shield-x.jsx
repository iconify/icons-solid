import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u13-m5bej.css';
import '../../css/g/gdtao5tpk.css';
import '../../css/w/w_uljabcc.css';
import '../../css/a/azlpvpbuc.css';
import '../../css/e/e-b97duyb.css';
import '../../css/o/ovlqcnb1e.css';
import '../../css/v/v9988ubde.css';
import '../../css/a/azlullbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u13-m5bej wm-shadow"/><path class="gdtao5tpk wm-k"/><path class="w_uljabcc wm-k"/><path class="azlpvpbuc wm-k"/><path class="e-b97duyb wm-k"/><path class="ovlqcnb1e wm-shine"/><path class="v9988ubde wm-k"/><path class="azlullbzt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:shield-x"} {...others} />);
}

export default Component;
