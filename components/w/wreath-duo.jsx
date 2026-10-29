import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fke7x9b9b.css';
import '../../css/s/s39hesbzx.css';
import '../../css/p/p6mot1-ii.css';
import '../../css/r/rla4yrbqa.css';
import '../../css/q/q5x6dubqe.css';
import '../../css/j/j2ywqub6x.css';
import '../../css/q/qs0kxmvmt.css';
import '../../css/z/z87r-o-fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fke7x9b9b"/><path class="s39hesbzx wm-a"/><path class="p6mot1-ii wm-a"/><path class="rla4yrbqa wm-a"/><path class="q5x6dubqe wm-a"/><path class="j2ywqub6x"/><path class="qs0kxmvmt"/><path class="wm-a z87r-o-fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wreath-duo"} {...others} />);
}

export default Component;
