import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf_lw1akt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf_lw1akt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:stars-outline"} {...others} />);
}

export default Component;
