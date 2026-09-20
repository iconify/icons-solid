import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcvgcht7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcvgcht7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:electrical-resistance"} {...others} />);
}

export default Component;
