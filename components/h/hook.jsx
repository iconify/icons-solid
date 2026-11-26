import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq4w-tbtk.css';
import '../../css/l/l7zwrbcme.css';
import '../../css/q/qhnjz8bkc.css';
import '../../css/f/fn29e-6im.css';
import '../../css/y/yisimub7y.css';
import '../../css/b/b29lbh-0e.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGF5k2NEki" cx="64.2" cy="59" r="135.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="wq4w-tbtk"/><stop offset=".85" class="l7zwrbcme"/><stop offset="1" class="l7zwrbcme"/></radialGradient></defs><path class="qhnjz8bkc"/><path fill="url(#SVGF5k2NEki)" transform="matrix(2.6 0 0 2.6 59.696 15.346)" class="fn29e-6im"/><path class="yisimub7y"/><path class="b29lbh-0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:hook"} {...others} />);
}

export default Component;
