import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5cnq49py.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5cnq49py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:favorite-shooting-outline"} {...others} />);
}

export default Component;
