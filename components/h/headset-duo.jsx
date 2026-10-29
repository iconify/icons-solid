import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c4haflbwb.css';
import '../../css/c/cvk-bup-z.css';
import '../../css/i/iatj5le9x.css';
import '../../css/j/j2t9-upmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c4haflbwb"/><path class="cvk-bup-z wm-a"/><path class="iatj5le9x"/><path class="j2t9-upmx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headset-duo"} {...others} />);
}

export default Component;
