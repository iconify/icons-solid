import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-dcdt1ug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-dcdt1ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:web-refresh"} {...others} />);
}

export default Component;
