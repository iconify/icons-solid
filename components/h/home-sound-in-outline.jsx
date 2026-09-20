import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gja2aab_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gja2aab_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:home-sound-in-outline"} {...others} />);
}

export default Component;
