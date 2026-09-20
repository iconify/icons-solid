import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/x/x68m2115d.css';
import '../../css/p/pjo79z61i.css';
import '../../css/q/qf407mj3u.css';
import '../../css/c/crzbm_bkf.css';
import '../../css/o/o9cvp5-qa.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="u9hq09b6k"/><path class="x68m2115d"/><path class="pjo79z61i"/><path class="qf407mj3u"/><path class="crzbm_bkf"/><path class="o9cvp5-qa"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-kenya"} {...others} />);
}

export default Component;
