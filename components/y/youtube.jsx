import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpg1b6bfv.css';
import '../../css/g/gh9w_71xg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hpg1b6bfv"/><path class="gh9w_71xg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:youtube"} {...others} />);
}

export default Component;
