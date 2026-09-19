import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l17hfdciu.css';
import '../../css/d/dtwl1wjmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l17hfdciu"/><path class="dtwl1wjmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clipboard-x-filled"} {...others} />);
}

export default Component;
