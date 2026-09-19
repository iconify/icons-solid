import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mh-1qobsq.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mh-1qobsq"/><path class="y7zppqbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wps-office-rectangle"} {...others} />);
}

export default Component;
