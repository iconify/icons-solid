import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f59zlachz.css';
import '../../css/m/mg1bkhbca.css';
import '../../css/q/qgiobccep.css';
import '../../css/e/ea9uldb2s.css';
import '../../css/u/uucjtrbxa.css';
import '../../css/x/xfnz_2opk.css';
import '../../css/y/y4sg8_v_e.css';
import '../../css/e/egfxxylyp.css';
import '../../css/k/kse2fabkv.css';
import '../../css/n/nd2_7up_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f59zlachz wm-shadow"/><path class="mg1bkhbca wm-k"/><path class="qgiobccep wm-k"/><path class="ea9uldb2s wm-k"/><path class="uucjtrbxa wm-k"/><path class="wm-k xfnz_2opk"/><path class="wm-shine y4sg8_v_e"/><path class="egfxxylyp wm-a"/><path class="kse2fabkv wm-a"/><path class="nd2_7up_l wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:firecracker"} {...others} />);
}

export default Component;
