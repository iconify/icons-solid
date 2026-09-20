import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ufx_3tb7d.css';
import '../../css/o/obvo8wuhs.css';
import '../../css/u/uksi1rdrk.css';
import '../../css/m/mh8lsoz8r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ufx_3tb7d"/><circle class="obvo8wuhs"/><rect class="uksi1rdrk"/><path class="mh8lsoz8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-camera-video-film-television-tv-camera-movies-video-recorder"} {...others} />);
}

export default Component;
