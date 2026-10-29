import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/txdfipboj.css';
import '../../css/n/nbj7ro57z.css';
import '../../css/k/kjq20lbyg.css';
import '../../css/t/tzrw3nvzq.css';
import '../../css/x/xdwdw1wlj.css';
import '../../css/n/nou_57b4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="txdfipboj wm-deco"/><path class="nbj7ro57z wm-deco"/><path class="kjq20lbyg wm-k"/><path class="tzrw3nvzq wm-a"/><path class="wm-k xdwdw1wlj"/><path class="nou_57b4u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-from-line-blueprint"} {...others} />);
}

export default Component;
