import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mia6ae4_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mia6ae4_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cable-car-solid"} {...others} />);
}

export default Component;
