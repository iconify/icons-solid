import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogvf7d5ad.css';
import '../../css/v/vptnqyboa.css';
import '../../css/z/zg4vnebtr.css';
import '../../css/i/ilpt1375k.css';
import '../../css/k/kwlttqbon.css';
import '../../css/q/q640ktw_a.css';
import '../../css/w/wtyumnbzl.css';
import '../../css/k/kba9v6k3g.css';
import '../../css/a/asafbrwne.css';
import '../../css/q/qfm-2w3hv.css';
import '../../css/d/d2v54v6cu.css';
import '../../css/b/b561m_p5h.css';
import '../../css/b/b3ddg1bph.css';
import '../../css/u/u5j3uvrbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogvf7d5ad wm-shadow"/><path class="vptnqyboa wm-k"/><path class="wm-k zg4vnebtr"/><path class="ilpt1375k wm-k"/><path class="kwlttqbon wm-k"/><path class="q640ktw_a wm-shine"/><path class="wm-k wtyumnbzl"/><path class="kba9v6k3g wm-a"/><path class="asafbrwne wm-a"/><path class="qfm-2w3hv wm-a"/><path class="d2v54v6cu wm-a"/><path class="b561m_p5h wm-a"/><path class="b3ddg1bph wm-a"/><path class="u5j3uvrbe wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:certificate"} {...others} />);
}

export default Component;
