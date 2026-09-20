import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce1h9l8wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ce1h9l8wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cursor-default-gesture-outline"} {...others} />);
}

export default Component;
