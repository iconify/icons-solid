import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5bf_zait.css';
import '../../css/r/r0ke4kbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q5bf_zait"/><path class="r0ke4kbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:credit-card-alt"} {...others} />);
}

export default Component;
