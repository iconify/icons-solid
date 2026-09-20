import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0l691bcz.css';
import '../../css/l/l6tmoy3pj.css';
import '../../css/b/budlp3b4a.css';
import '../../css/w/wvf3su4pg.css';
import '../../css/l/l3gmxboke.css';
import '../../css/q/ql53i-6ey.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGwQk6EdiP" x1="88.655" x2="423.345" y1="423.345" y2="88.656" gradientUnits="userSpaceOnUse"><stop offset="0" class="o0l691bcz"/><stop offset="1" class="l6tmoy3pj"/></linearGradient><ellipse fill="url(#SVGwQk6EdiP)" class="budlp3b4a"/><path class="wvf3su4pg"/><path class="l3gmxboke"/><path class="ql53i-6ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apprise"} {...others} />);
}

export default Component;
