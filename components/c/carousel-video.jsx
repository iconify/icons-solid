import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gxkz_mv5m.css';
import '../../css/c/crtku50gp.css';
import '../../css/v/vsyouvb5i.css';
import '../../css/v/vq3rsgb0h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="gxkz_mv5m"/><rect class="crtku50gp"/><rect class="vsyouvb5i"/><path class="vq3rsgb0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:carousel-video"} {...others} />);
}

export default Component;
