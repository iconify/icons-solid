import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn5-jrewn.css';
import '../../css/z/zuyq0qy7l.css';

const viewBox = {"width":1510,"height":1515};
const content = `<defs><linearGradient id="SVGA2qpVc3q" x2="1" gradientTransform="rotate(-12 4465 426)scale(1466.69 1469.872)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nn5-jrewn"/><stop offset="1" class="nn5-jrewn"/></linearGradient></defs><path fill="url(#SVGA2qpVc3q)" class="zuyq0qy7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:pnj"} {...others} />);
}

export default Component;
