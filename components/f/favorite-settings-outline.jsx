import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmpc50jny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmpc50jny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:favorite-settings-outline"} {...others} />);
}

export default Component;
