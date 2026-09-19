import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pzh2xemmy.css';
import '../../css/j/jlk5hjb9z.css';
import '../../css/r/rbrzdibek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pzh2xemmy"/><path class="jlk5hjb9z"/><path class="rbrzdibek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-camera-ai"} {...others} />);
}

export default Component;
