import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp91tlbdg.css';
import '../../css/x/xlpk22b2f.css';
import '../../css/b/bt9_q9bro.css';
import '../../css/h/h6ll56bfq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xp91tlbdg"/><path class="xlpk22b2f"/><path class="bt9_q9bro"/><path class="h6ll56bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:devices-20"} {...others} />);
}

export default Component;
