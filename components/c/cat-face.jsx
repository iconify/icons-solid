import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbu9iw12k.css';
import '../../css/w/w1rz5ibpm.css';
import '../../css/f/ftm_wspzc.css';
import '../../css/l/l4y59e4oe.css';
import '../../css/y/yp9zh8bzh.css';
import '../../css/p/pdam7cclh.css';
import '../../css/r/rwzblo3wv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pbu9iw12k"/><path class="w1rz5ibpm"/><ellipse class="ftm_wspzc"/><ellipse class="l4y59e4oe"/><path class="yp9zh8bzh"/><path class="pdam7cclh"/><path class="rwzblo3wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cat-face"} {...others} />);
}

export default Component;
