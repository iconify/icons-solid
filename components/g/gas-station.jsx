import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmh9cs9my.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dmh9cs9my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gas-station"} {...others} />);
}

export default Component;
