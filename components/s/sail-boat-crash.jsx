import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l823r3h8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l823r3h8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sail-boat-crash"} {...others} />);
}

export default Component;
