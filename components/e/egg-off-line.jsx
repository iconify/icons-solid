import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg4ad6btm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg4ad6btm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:egg-off-line"} {...others} />);
}

export default Component;
