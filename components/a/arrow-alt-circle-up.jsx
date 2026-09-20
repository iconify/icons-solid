import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtb87nb7y.css';
import '../../css/s/ssf66kbzi.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtb87nb7y"/><path class="ssf66kbzi"/><path class="i7sr6ubzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-alt-circle-up"} {...others} />);
}

export default Component;
