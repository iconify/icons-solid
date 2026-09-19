import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5p0du91u.css';
import '../../css/x/xc-a65bmd.css';
import '../../css/l/ln79lb19q.css';
import '../../css/s/srxxfbc1t.css';
import '../../css/u/u5z39lm2f.css';
import '../../css/n/nc0kn9w0s.css';
import '../../css/p/ptu06zbsx.css';
import '../../css/w/wfiz0jxhg.css';
import '../../css/y/ys5atzbfu.css';
import '../../css/c/czbd3xbws.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="l5p0du91u"/><circle class="xc-a65bmd"/><path class="ln79lb19q"/><circle class="srxxfbc1t"/><circle class="u5z39lm2f"/><circle class="nc0kn9w0s"/><circle class="ptu06zbsx"/><circle class="wfiz0jxhg"/><circle class="ys5atzbfu"/><circle class="czbd3xbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:keypad-outline"} {...others} />);
}

export default Component;
