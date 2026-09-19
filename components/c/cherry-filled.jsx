import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se4_yi4nq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se4_yi4nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cherry-filled"} {...others} />);
}

export default Component;
