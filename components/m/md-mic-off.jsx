import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktwpc4lka.css';
import '../../css/z/zfvalbp8b.css';
import '../../css/w/wh0krirqr.css';
import '../../css/s/sosnt7a2s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ktwpc4lka"/><path class="zfvalbp8b"/><path class="wh0krirqr"/><path class="sosnt7a2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-mic-off"} {...others} />);
}

export default Component;
