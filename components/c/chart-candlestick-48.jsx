import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu-s-mrny.css';
import '../../css/y/ypecetwke.css';
import '../../css/w/wqngztpuq.css';
import '../../css/t/ts68x3biw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gu-s-mrny"/><path class="ypecetwke"/><path class="wqngztpuq"/><path class="ts68x3biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-candlestick-48"} {...others} />);
}

export default Component;
