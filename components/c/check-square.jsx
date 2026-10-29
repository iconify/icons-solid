import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqwig5bad.css';
import '../../css/i/iv_o11bft.css';
import '../../css/b/b9u-plbmf.css';
import '../../css/u/u1q9o1bso.css';
import '../../css/s/s-9bd6_xl.css';
import '../../css/d/dbn0ypbvf.css';
import '../../css/m/mhp33zbyv.css';
import '../../css/k/kc9bp71dk.css';
import '../../css/v/vy_89ca9s.css';
import '../../css/m/mtk1lbcxq.css';
import '../../css/p/psk0u3bkc.css';
import '../../css/c/cic7av35b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wqwig5bad"/><path class="iv_o11bft wm-k"/><path class="b9u-plbmf wm-k"/><path class="u1q9o1bso wm-k"/><path class="s-9bd6_xl wm-k"/><path class="dbn0ypbvf wm-shine"/><path class="mhp33zbyv wm-k"/><path class="kc9bp71dk wm-a"/><path class="vy_89ca9s wm-a"/><path class="mtk1lbcxq wm-a"/><path class="psk0u3bkc wm-a"/><path class="cic7av35b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:check-square"} {...others} />);
}

export default Component;
