import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iakx74-2k.css';
import '../../css/b/bgmlavupy.css';
import '../../css/g/gkjxbdqnd.css';
import '../../css/d/d8irskbeh.css';
import '../../css/f/fndfhjbmh.css';
import '../../css/r/rmnofhb0k.css';
import '../../css/e/e1ls3-bgi.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGpHde96TC" cx="89.9" cy="47.1" r="68.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="iakx74-2k"/><stop offset=".85" class="bgmlavupy"/><stop offset="1" class="bgmlavupy"/></radialGradient></defs><path class="gkjxbdqnd"/><path fill="url(#SVGpHde96TC)" transform="matrix(2.8 0 0 2.8 -28.016 -1.926)" class="d8irskbeh"/><path class="fndfhjbmh"/><path class="rmnofhb0k"/><path class="e1ls3-bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:top-arrow"} {...others} />);
}

export default Component;
