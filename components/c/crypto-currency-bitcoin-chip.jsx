import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jbtya1bpz.css';
import '../../css/y/yzzav4bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jbtya1bpz"/><path class="yzzav4bwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-currency-bitcoin-chip"} {...others} />);
}

export default Component;
