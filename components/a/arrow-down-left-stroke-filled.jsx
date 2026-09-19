import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4yav7kxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4yav7kxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-down-left-stroke-filled"} {...others} />);
}

export default Component;
