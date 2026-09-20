import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/p/pi7jdd7uf.css';
import '../../css/k/k4zcbrbym.css';
import '../../css/z/zj93wib6z.css';
import '../../css/f/f2eiwubox.css';
import '../../css/f/fywslsbyr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="pi7jdd7uf"/><path class="k4zcbrbym"/><path class="zj93wib6z"/><ellipse class="f2eiwubox"/><path class="fywslsbyr"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-andorra"} {...others} />);
}

export default Component;
