import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbg5w1btb.css';
import '../../css/r/rl1-e60-n.css';
import '../../css/h/hf4ex5bxl.css';
import '../../css/w/w2wzwzvth.css';
import '../../css/g/g1mvwrb7t.css';
import '../../css/e/eprrkjb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tbg5w1btb wm-k"/><path class="rl1-e60-n wm-k"/><path class="hf4ex5bxl wm-k"/><path class="w2wzwzvth wm-shine"/><path class="g1mvwrb7t wm-k"/><path class="eprrkjb9i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:ban"} {...others} />);
}

export default Component;
