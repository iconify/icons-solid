import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw44cqses.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw44cqses"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:halloween-candle-filled"} {...others} />);
}

export default Component;
