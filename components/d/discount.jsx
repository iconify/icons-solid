import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zc8428b1g.css';
import '../../css/g/gni434ykg.css';
import '../../css/p/pgea1lsuj.css';
import '../../css/a/a4c82-36o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zc8428b1g"/><path class="gni434ykg"/><rect transform="rotate(-45 28.027 34.009)" class="pgea1lsuj"/><rect transform="rotate(-45 41.976 47.958)" class="a4c82-36o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:discount"} {...others} />);
}

export default Component;
