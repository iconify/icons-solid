import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r17tyccak.css';
import '../../css/l/lx_rfrizw.css';
import '../../css/e/ey9i23twc.css';
import '../../css/a/alzclfpca.css';
import '../../css/i/iafhd_5wz.css';
import '../../css/p/p3t5vvvkk.css';
import '../../css/d/dda-sfgjk.css';
import '../../css/z/zalb6-5zy.css';
import '../../css/z/zs80-lj6d.css';
import '../../css/n/npeppl28h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r17tyccak"/><path class="lx_rfrizw"/><rect transform="rotate(180 255.83 141.11)" class="ey9i23twc"/><path class="alzclfpca"/><circle class="iafhd_5wz"/><circle class="p3t5vvvkk"/><circle class="dda-sfgjk"/><path class="zalb6-5zy"/><path class="zs80-lj6d"/><circle class="npeppl28h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:spliit"} {...others} />);
}

export default Component;
