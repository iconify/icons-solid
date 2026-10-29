import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpbycg2-a.css';
import '../../css/z/zdoxhrbzu.css';
import '../../css/l/lg89z_bee.css';
import '../../css/n/n7osvkb6a.css';
import '../../css/u/u-0s21eff.css';
import '../../css/i/i_wush4ov.css';
import '../../css/g/gj6m_efwq.css';
import '../../css/m/mh1nnw2ow.css';
import '../../css/i/i60cvcbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpbycg2-a wm-shadow"/><path class="wm-k zdoxhrbzu"/><path class="lg89z_bee wm-k"/><path class="n7osvkb6a wm-k"/><path class="u-0s21eff wm-k"/><path class="i_wush4ov wm-k"/><path class="gj6m_efwq wm-shine"/><path class="mh1nnw2ow wm-a"/><path class="i60cvcbvi wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:balloon"} {...others} />);
}

export default Component;
