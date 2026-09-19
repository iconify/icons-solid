import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zib0qbour.css';
import '../../css/k/k5pr-v-xw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zib0qbour"/><path class="k5pr-v-xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-right-stroke-square"} {...others} />);
}

export default Component;
