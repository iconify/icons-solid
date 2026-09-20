import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7lxw4bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7lxw4bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:candle-fill"} {...others} />);
}

export default Component;
