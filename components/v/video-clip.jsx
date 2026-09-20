import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e0tnukbhf.css';
import '../../css/m/m-tt6fcof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="e0tnukbhf"/><path class="m-tt6fcof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:video-clip"} {...others} />);
}

export default Component;
