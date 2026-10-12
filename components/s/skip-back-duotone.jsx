import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rry4zhb3e.css';
import '../../css/c/ckr17wbno.css';
import '../../css/b/buxgmoc6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rry4zhb3e"/><path class="ckr17wbno"/><path class="buxgmoc6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:skip-back-duotone"} {...others} />);
}

export default Component;
