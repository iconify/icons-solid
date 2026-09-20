import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g--ezebfp.css';
import '../../css/a/a8qr8zbfl.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/a/ad35ldbxn.css';
import '../../css/l/l8hihu8ge.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g--ezebfp"/><path class="a8qr8zbfl"/><path class="d8kbcbc-x"/><path class="ad35ldbxn"/><path class="l8hihu8ge"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lesbian"} {...others} />);
}

export default Component;
