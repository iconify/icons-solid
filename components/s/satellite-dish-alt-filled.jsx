import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt3_b7qwc.css';
import '../../css/v/v14jurb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt3_b7qwc"/><path class="v14jurb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:satellite-dish-alt-filled"} {...others} />);
}

export default Component;
