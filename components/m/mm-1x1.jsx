import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrsheowja.css';
import '../../css/x/xwpqycb7s.css';
import '../../css/m/m-srjr7in.css';
import '../../css/s/sxzxltbvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vrsheowja"/><path class="xwpqycb7s"/><path class="m-srjr7in"/><path id="SVGiaX3v77R" class="sxzxltbvu"/><use width="100%" height="100%" href="#SVGiaX3v77R" transform="rotate(-144 256 274)"/><use width="100%" height="100%" href="#SVGiaX3v77R" transform="rotate(-72 256 274)"/><use width="100%" height="100%" href="#SVGiaX3v77R" transform="rotate(72 256 274)"/><use width="100%" height="100%" href="#SVGiaX3v77R" transform="rotate(144 256 274)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mm-1x1"} {...others} />);
}

export default Component;
