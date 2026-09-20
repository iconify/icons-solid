import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-lyb0boe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-lyb0boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:trash-can-empty"} {...others} />);
}

export default Component;
