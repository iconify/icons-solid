import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5pr-v-xw.css';
import '../../css/y/yf1avm6ta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5pr-v-xw"/><path class="yf1avm6ta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-right-square-filled"} {...others} />);
}

export default Component;
