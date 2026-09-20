import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhv95j8ok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhv95j8ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-bulb-outline"} {...others} />);
}

export default Component;
