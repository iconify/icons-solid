import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ren2jybrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ren2jybrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:temp-sensor"} {...others} />);
}

export default Component;
