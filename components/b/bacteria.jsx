import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vvtdlyypj.css';
import '../../css/b/b9ku26bot.css';
import '../../css/g/g8wgs-f4b.css';
import '../../css/k/kxy32bbbv.css';
import '../../css/h/hgla_v2aw.css';
import '../../css/s/szkdenbgy.css';
import '../../css/j/jzq2154oi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="vvtdlyypj"/><path class="b9ku26bot"/><path class="g8wgs-f4b"/><path class="kxy32bbbv"/><path class="hgla_v2aw"/><path class="szkdenbgy"/><path class="jzq2154oi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bacteria"} {...others} />);
}

export default Component;
