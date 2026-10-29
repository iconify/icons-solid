import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb5_ojudz.css';
import '../../css/x/xtz-l4bza.css';
import '../../css/y/y_uqnrb5n.css';
import '../../css/o/o0yabbcdx.css';
import '../../css/r/rhr6r0bqs.css';
import '../../css/d/dmqr_svyz.css';
import '../../css/p/pne3pub7v.css';
import '../../css/q/qwkundbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zb5_ojudz"/><path class="wm-k xtz-l4bza"/><path class="wm-k y_uqnrb5n"/><path class="o0yabbcdx wm-k"/><path class="rhr6r0bqs wm-k"/><path class="dmqr_svyz wm-k"/><path class="pne3pub7v wm-shine"/><path class="qwkundbrg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:accessibility"} {...others} />);
}

export default Component;
