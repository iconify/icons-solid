import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zww9wuo5l.css';
import '../../css/g/g-c1thbmh.css';
import '../../css/d/desf4f08p.css';
import '../../css/e/ef6ivcopl.css';
import '../../css/s/sjixpcb_n.css';
import '../../css/n/nfea7u7qj.css';
import '../../css/x/xrzu2qbbf.css';
import '../../css/p/pjqqaqb6w.css';
import '../../css/v/v-0kyqcnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zww9wuo5l"/><path class="g-c1thbmh wm-k"/><path class="desf4f08p wm-k"/><path class="ef6ivcopl wm-k"/><path class="sjixpcb_n wm-k"/><path class="nfea7u7qj wm-k"/><path class="wm-shine xrzu2qbbf"/><path class="pjqqaqb6w wm-s"/><path class="v-0kyqcnl wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lightbulb-off"} {...others} />);
}

export default Component;
