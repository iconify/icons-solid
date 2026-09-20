import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su4gzdgfk.css';
import '../../css/a/am6ar_2xw.css';
import '../../css/o/ovver6v9k.css';
import '../../css/c/c_4m1fbtc.css';
import '../../css/k/kahoavbuc.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="su4gzdgfk"/><path class="am6ar_2xw"/><path class="ovver6v9k"/><path class="c_4m1fbtc"/><path class="kahoavbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tablet"} {...others} />);
}

export default Component;
