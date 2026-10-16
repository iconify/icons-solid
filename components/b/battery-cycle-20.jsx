import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub-einb7l.css';
import '../../css/w/w73ky16tg.css';
import '../../css/m/m851t0cxs.css';
import '../../css/x/x6bsj-bei.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ub-einb7l"/><path class="w73ky16tg"/><path class="m851t0cxs"/><path class="x6bsj-bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cycle-20"} {...others} />);
}

export default Component;
