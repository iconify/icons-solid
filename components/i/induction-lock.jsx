import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q13ik7jzl.css';
import '../../css/i/im4w5mbav.css';
import '../../css/n/no6nkkbnk.css';
import '../../css/e/eev5yr9rd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="q13ik7jzl"/><path class="im4w5mbav"/><path class="no6nkkbnk"/><path class="eev5yr9rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:induction-lock"} {...others} />);
}

export default Component;
