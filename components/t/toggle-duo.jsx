import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lw2g2bb3f.css';
import '../../css/s/skqzgzjwd.css';
import '../../css/p/pjqa07bbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lw2g2bb3f"/><path class="skqzgzjwd wm-a"/><path class="pjqa07bbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toggle-duo"} {...others} />);
}

export default Component;
