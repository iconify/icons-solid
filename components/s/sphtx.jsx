import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g2wr_tbin.css';
import '../../css/i/itpfg7blh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="g2wr_tbin"/><path class="itpfg7blh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:sphtx"} {...others} />);
}

export default Component;
