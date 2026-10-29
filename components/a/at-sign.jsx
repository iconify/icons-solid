import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbexv5_ny.css';
import '../../css/b/bwedbwbrz.css';
import '../../css/v/v9ejqle9n.css';
import '../../css/f/fqcukgb8f.css';
import '../../css/k/kid63ns1w.css';
import '../../css/g/ge6mk8gjq.css';
import '../../css/k/k5mmkobdg.css';
import '../../css/b/bo7bmjbtc.css';
import '../../css/r/r8tnxnbyd.css';
import '../../css/a/aup8wbbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbexv5_ny wm-shadow"/><path class="bwedbwbrz"/><path class="v9ejqle9n"/><path class="fqcukgb8f"/><path class="kid63ns1w wm-shine"/><path class="ge6mk8gjq"/><path class="k5mmkobdg"/><path class="bo7bmjbtc"/><path class="r8tnxnbyd"/><path class="aup8wbbnf wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:at-sign"} {...others} />);
}

export default Component;
