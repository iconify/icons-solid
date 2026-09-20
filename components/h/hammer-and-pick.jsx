import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-iy8hb4l.css';
import '../../css/u/u2cf6-_xo.css';
import '../../css/o/oasnyz-hm.css';
import '../../css/v/vp2ns0bbd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v9hj3vxqo.css';
import '../../css/d/d7ihtib_a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v-iy8hb4l"/><path class="u2cf6-_xo"/><path class="oasnyz-hm"/><path class="vp2ns0bbd"/><g class="jn8qy4bru"><path class="v9hj3vxqo"/><path class="d7ihtib_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hammer-and-pick"} {...others} />);
}

export default Component;
