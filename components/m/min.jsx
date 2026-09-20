import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktpxm8blb.css';
import '../../css/f/fpjy57bvv.css';
import '../../css/k/kzwsevvuf.css';
import '../../css/i/iemzgbsak.css';
import '../../css/a/a7j358bpo.css';
import '../../css/l/l8gkojm2l.css';
import '../../css/z/z7bh8zbgi.css';
import '../../css/n/nt3cnzbwz.css';
import '../../css/g/gokhssbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktpxm8blb"/><path class="fpjy57bvv"/><path class="kzwsevvuf"/><path class="iemzgbsak"/><path class="a7j358bpo"/><path class="l8gkojm2l"/><path class="z7bh8zbgi"/><path class="nt3cnzbwz"/><path class="gokhssbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:min"} {...others} />);
}

export default Component;
