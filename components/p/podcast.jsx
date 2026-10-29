import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o9x0zt3az.css';
import '../../css/s/ssbvo1ywn.css';
import '../../css/k/k03jbobmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o9x0zt3az"/><path class="ssbvo1ywn wm-a"/><path class="k03jbobmk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:podcast"} {...others} />);
}

export default Component;
