import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/deqj57blt.css';
import '../../css/g/gl55ebced.css';
import '../../css/n/nfb4d9bdw.css';
import '../../css/a/a8qjxac2f.css';
import '../../css/d/d51br0pza.css';
import '../../css/f/fqqm5fk1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="deqj57blt wm-shadow"/><path class="gl55ebced"/><path class="nfb4d9bdw"/><path class="a8qjxac2f"/><path class="d51br0pza"/><path class="fqqm5fk1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:paw-print"} {...others} />);
}

export default Component;
