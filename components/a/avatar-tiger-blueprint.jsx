import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eulzmfb-n.css';
import '../../css/r/rjh7pdb-g.css';
import '../../css/l/lu7gsfbqw.css';
import '../../css/y/y0auvubwg.css';
import '../../css/p/plwqyqbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eulzmfb-n wm-deco"/><path class="rjh7pdb-g wm-deco"/><path class="lu7gsfbqw wm-deco"/><path class="wm-k y0auvubwg"/><path class="plwqyqbee wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-tiger-blueprint"} {...others} />);
}

export default Component;
