import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p11wdrhxg.css';
import '../../css/c/c488girgm.css';
import '../../css/n/ng2pe5bto.css';
import '../../css/r/rxp54bc5u.css';
import '../../css/c/c4_zv0btc.css';

const viewBox = {"width":320,"height":246.858};
const content = `<path class="p11wdrhxg"/><path class="c488girgm"/><path class="ng2pe5bto"/><path transform="matrix(.9357 0 .01206 .91905 -323.102 -56.268)" class="rxp54bc5u"/><path class="c4_zv0btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:world-bank"} {...others} />);
}

export default Component;
