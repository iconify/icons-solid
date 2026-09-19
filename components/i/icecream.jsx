import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fclu4vwav.css';
import '../../css/l/ls3-jzb9e.css';
import '../../css/c/ckj4a4gpf.css';
import '../../css/y/yfvylybuc.css';
import '../../css/y/ytkr-qz2l.css';
import '../../css/w/wc-yv6b2x.css';

const viewBox = {"width":46,"height":98.85};
const content = `<path class="fclu4vwav"/><path class="ls3-jzb9e"/><path class="ckj4a4gpf"/><path class="yfvylybuc"/><path class="ytkr-qz2l"/><path class="wc-yv6b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:icecream"} {...others} />);
}

export default Component;
