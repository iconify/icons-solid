import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgno_hn4s.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tgno_hn4s"/><path class="hgpzimtyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-candlestick"} {...others} />);
}

export default Component;
