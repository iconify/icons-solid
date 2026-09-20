import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yyr7ulb8d.css';
import '../../css/c/cpfg5sbpf.css';
import '../../css/t/t1etkdhfl.css';
import '../../css/i/iroo2k77l.css';
import '../../css/d/datlrk38j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yyr7ulb8d"/><rect class="cpfg5sbpf"/><path class="t1etkdhfl"/><rect class="iroo2k77l"/><path class="datlrk38j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:candlestick-chart"} {...others} />);
}

export default Component;
