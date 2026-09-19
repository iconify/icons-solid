import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td7gww7fr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td7gww7fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:wifi-signal-none"} {...others} />);
}

export default Component;
