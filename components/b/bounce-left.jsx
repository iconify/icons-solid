import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jhpso8b8b.css';
import '../../css/n/np1e_hbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jhpso8b8b"/><circle transform="matrix(-1 0 0 1 8 3)" class="np1e_hbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bounce-left"} {...others} />);
}

export default Component;
