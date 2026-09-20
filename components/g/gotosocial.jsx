import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dku_o5bqt.css';
import '../../css/t/te7xw1bpj.css';
import '../../css/x/xq9ezhb2m.css';
import '../../css/x/xu878qu8u.css';
import '../../css/u/uarjyd69g.css';
import '../../css/e/ewwzl8e4s.css';
import '../../css/c/cw75nqbay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dku_o5bqt"/><path class="te7xw1bpj"/><path class="xq9ezhb2m"/><path class="xu878qu8u"/><path class="uarjyd69g"/><path class="ewwzl8e4s"/><path class="cw75nqbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gotosocial"} {...others} />);
}

export default Component;
