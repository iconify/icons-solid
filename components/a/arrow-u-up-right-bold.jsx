import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylpowi0yz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ylpowi0yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-u-up-right-bold"} {...others} />);
}

export default Component;
