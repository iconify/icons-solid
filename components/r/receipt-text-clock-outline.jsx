import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl11uwbud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl11uwbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:receipt-text-clock-outline"} {...others} />);
}

export default Component;
