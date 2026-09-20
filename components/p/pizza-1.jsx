import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/m/mpbhxjbgg.css';
import '../../css/u/u_xha4bdr.css';
import '../../css/e/e397-yfow.css';
import '../../css/i/imqhzhefe.css';
import '../../css/a/a8ixx8lvs.css';
import '../../css/u/uu2fddcrp.css';
import '../../css/y/yviw3kbhd.css';
import '../../css/q/q38zq3bit.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="mpbhxjbgg"/><path class="u_xha4bdr"/><path class="e397-yfow"/><path class="imqhzhefe"/><path class="a8ixx8lvs"/><path class="uu2fddcrp"/><path class="yviw3kbhd"/><path class="q38zq3bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:pizza-1"} {...others} />);
}

export default Component;
