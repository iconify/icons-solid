import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tltd-smyd.css';
import '../../css/e/ehz_gxbyn.css';
import '../../css/j/jh5_0cbif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tltd-smyd"/><path class="ehz_gxbyn wm-a"/><path class="jh5_0cbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:speaker-duo"} {...others} />);
}

export default Component;
