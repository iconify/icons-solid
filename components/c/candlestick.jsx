import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2c-s1u4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2c-s1u4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:candlestick"} {...others} />);
}

export default Component;
