import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2d4gmerl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2d4gmerl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dice-two"} {...others} />);
}

export default Component;
