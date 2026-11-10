import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f301k2_gd.css';
import '../../css/s/sruo9m3ew.css';
import '../../css/n/n2i_0lbfe.css';
import '../../css/h/hht_fny7m.css';
import '../../css/t/tqfpbzwoe.css';
import '../../css/f/feyf4mb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="f301k2_gd"/><path class="sruo9m3ew"/><path class="n2i_0lbfe"/><path class="hht_fny7m"/><path class="tqfpbzwoe"/><path class="feyf4mb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:burger"} {...others} />);
}

export default Component;
