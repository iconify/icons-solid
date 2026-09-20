import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip9gr5baz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ip9gr5baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:air-humidifier"} {...others} />);
}

export default Component;
