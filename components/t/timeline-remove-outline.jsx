import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxeu6zgvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxeu6zgvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:timeline-remove-outline"} {...others} />);
}

export default Component;
