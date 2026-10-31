import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gi9uk433w.css';
import '../../css/w/w9slh-ggn.css';
import '../../css/s/szmiuvb9q.css';
import '../../css/k/k_r38e-dr.css';
import '../../css/i/iz2u8nvzt.css';
import '../../css/s/saoh2qb1m.css';
import '../../css/n/n9cxwbclx.css';
import '../../css/j/jf_xzmb5f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gi9uk433w"/><path class="w9slh-ggn"/><path class="szmiuvb9q"/><path class="k_r38e-dr"/><path class="iz2u8nvzt"/><path class="saoh2qb1m"/><path class="n9cxwbclx"/><path class="jf_xzmb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:fried-egg-dish"} {...others} />);
}

export default Component;
