import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/y/yk4wejb5r.css';
import '../../css/x/x2ocqx88i.css';
import '../../css/l/ljeitrr-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="wm-s yk4wejb5r"/><path class="wm-s x2ocqx88i"/><path class="ljeitrr-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-star-duo"} {...others} />);
}

export default Component;
