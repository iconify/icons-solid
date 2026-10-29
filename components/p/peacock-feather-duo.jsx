import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c-3-pwfis.css';
import '../../css/b/b5nir9bma.css';
import '../../css/k/kbd6eebjl.css';
import '../../css/m/mjzvuibua.css';
import '../../css/u/upbjgs79u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c-3-pwfis"/><path class="b5nir9bma wm-a"/><path class="kbd6eebjl wm-a"/><path class="mjzvuibua"/><path class="upbjgs79u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:peacock-feather-duo"} {...others} />);
}

export default Component;
