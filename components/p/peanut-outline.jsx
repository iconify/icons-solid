import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxwb6_eza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxwb6_eza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:peanut-outline"} {...others} />);
}

export default Component;
