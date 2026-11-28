import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji1cc1dkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji1cc1dkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:candlestick"} {...others} />);
}

export default Component;
