import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0hp9je6w.css';
import '../../css/g/gyjf_s56i.css';
import '../../css/n/nvslzgbge.css';
import '../../css/x/xifygybas.css';
import '../../css/x/x9q6llb7e.css';
import '../../css/f/fwfw3ybbx.css';
import '../../css/g/g7gw-ccdb.css';
import '../../css/f/f3b6i7bbo.css';
import '../../css/l/l5yhoabzp.css';
import '../../css/o/oo74_zb6l.css';
import '../../css/c/cml7sob3e.css';
import '../../css/x/xwizlmbqk.css';
import '../../css/x/x1rug3b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0hp9je6w wm-shadow"/><path class="gyjf_s56i wm-k"/><path class="nvslzgbge wm-k"/><path class="wm-k xifygybas"/><path class="wm-k x9q6llb7e"/><path class="fwfw3ybbx wm-k"/><path class="g7gw-ccdb wm-shine"/><path class="f3b6i7bbo wm-k"/><path class="l5yhoabzp wm-k"/><path class="oo74_zb6l wm-k"/><path class="cml7sob3e wm-k"/><path class="wm-k xwizlmbqk"/><path class="wm-a x1rug3b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:eraser"} {...others} />);
}

export default Component;
