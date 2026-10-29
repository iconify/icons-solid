import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/az90bnb8y.css';
import '../../css/l/l0xswydlb.css';
import '../../css/k/klpzb7dyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="az90bnb8y wm-deco"/><path class="l0xswydlb wm-k"/><path class="klpzb7dyr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ungroup-blueprint"} {...others} />);
}

export default Component;
