import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm2q1dbxf.css';
import '../../css/u/u438j6bft.css';
import '../../css/a/aut13pqec.css';
import '../../css/r/rhofwgbmn.css';
import '../../css/a/avau4g4th.css';
import '../../css/b/bmr1i1biq.css';
import '../../css/n/nyso2rf9u.css';
import '../../css/w/wf_li_b4i.css';
import '../../css/q/qed66gyhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm2q1dbxf wm-shadow"/><path class="u438j6bft wm-k"/><path class="aut13pqec wm-k"/><path class="rhofwgbmn wm-k"/><path class="avau4g4th wm-k"/><path class="bmr1i1biq wm-k"/><path class="nyso2rf9u wm-shine"/><path class="wf_li_b4i wm-k"/><path class="qed66gyhv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chess"} {...others} />);
}

export default Component;
