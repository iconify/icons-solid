import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh1d8hbja.css';
import '../../css/a/anlboq3_k.css';
import '../../css/t/thpezsbat.css';
import '../../css/k/k7_jydbdb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wh1d8hbja"/><path class="anlboq3_k"/><path class="thpezsbat"/><path class="k7_jydbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sando-dark"} {...others} />);
}

export default Component;
