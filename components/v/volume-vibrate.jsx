import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhcb-1bog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uhcb-1bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:volume-vibrate"} {...others} />);
}

export default Component;
