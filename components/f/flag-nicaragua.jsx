import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/r/ryuchjvkn.css';
import '../../css/r/r73utib8z.css';
import '../../css/t/t-a2_pckc.css';
import '../../css/z/zm0qtgemr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="ryuchjvkn"/><path class="r73utib8z"/><path class="t-a2_pckc"/><circle class="zm0qtgemr"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-nicaragua"} {...others} />);
}

export default Component;
