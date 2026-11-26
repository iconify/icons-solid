import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2fsuke8d.css';
import '../../css/w/wtquvrszr.css';
import '../../css/x/xht9v2b6m.css';
import '../../css/u/uh-vabbch.css';
import '../../css/e/ep58dcj9q.css';
import '../../css/z/zjr7pabxr.css';
import '../../css/y/y-_uuuecm.css';
import '../../css/j/jx2_z2lso.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGxwehMeui" cx="64.1" cy="53.4" r="142.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="p2fsuke8d"/><stop offset=".85" class="wtquvrszr"/><stop offset="1" class="wtquvrszr"/></radialGradient></defs><path class="xht9v2b6m"/><path fill="url(#SVGxwehMeui)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="uh-vabbch"/><path class="ep58dcj9q"/><path class="zjr7pabxr"/><path class="y-_uuuecm"/><path class="jx2_z2lso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:black-square-button"} {...others} />);
}

export default Component;
