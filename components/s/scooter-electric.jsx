import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl5p9ubwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bl5p9ubwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:scooter-electric"} {...others} />);
}

export default Component;
