import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryvhbj1nz.css';
import '../../css/k/kul882hls.css';
import '../../css/h/hg3-fcc3e.css';
import '../../css/i/i_c2sb-gj.css';
import '../../css/v/v8877mv9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ryvhbj1nz"/><path class="kul882hls"/><path class="hg3-fcc3e"/><path class="i_c2sb-gj"/><path class="v8877mv9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewilding-20-bold"} {...others} />);
}

export default Component;
