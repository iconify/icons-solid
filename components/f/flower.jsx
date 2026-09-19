import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb-eyybsf.css';
import '../../css/e/effisz2bi.css';
import '../../css/i/izvg83llc.css';
import '../../css/a/a0rybjejg.css';
import '../../css/c/c8-rxtcam.css';
import '../../css/b/b73rntb-e.css';
import '../../css/y/ypk_3qk3u.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="nb-eyybsf"/><defs><circle id="SVGifCBlePx" class="effisz2bi"/></defs><clipPath id="SVGtcVZrdEc"><use href="#SVGifCBlePx"/></clipPath><g clip-path="url(#SVGtcVZrdEc)"><path class="izvg83llc"/><path class="a0rybjejg"/><path class="c8-rxtcam"/><path class="b73rntb-e"/><path class="ypk_3qk3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:flower"} {...others} />);
}

export default Component;
