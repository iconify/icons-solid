import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qag91yrff.css';
import '../../css/d/ds-b49bvy.css';
import '../../css/j/jk36mhjpb.css';
import '../../css/n/n1jhc7b1e.css';
import '../../css/p/p_p-l2b2a.css';
import '../../css/x/x530lmqlz.css';
import '../../css/a/aaqvm9buy.css';
import '../../css/r/rezu_e4qb.css';
import '../../css/a/a6pp7-9pg.css';
import '../../css/n/nav12ib2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qag91yrff wm-shadow"/><path class="ds-b49bvy wm-k"/><path class="jk36mhjpb wm-k"/><path class="n1jhc7b1e wm-k"/><path class="p_p-l2b2a wm-k"/><path class="wm-shine x530lmqlz"/><path class="aaqvm9buy wm-k"/><path class="rezu_e4qb wm-k"/><path class="a6pp7-9pg wm-k"/><path class="nav12ib2t wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:piano"} {...others} />);
}

export default Component;
