import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v6oezrbhp.css';
import '../../css/x/xb6r11bxx.css';
import '../../css/k/k-f0d5vtr.css';
import '../../css/o/ozpfs0bob.css';
import '../../css/x/x_ldzegnx.css';
import '../../css/q/qtlb22lgk.css';
import '../../css/d/dpuu07bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="v6oezrbhp"/><path class="xb6r11bxx"/><path class="k-f0d5vtr"/><path class="ozpfs0bob"/><path class="x_ldzegnx"/><path class="qtlb22lgk"/><path class="dpuu07bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:inbox-post"} {...others} />);
}

export default Component;
