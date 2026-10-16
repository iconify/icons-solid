import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsmnqk5do.css';
import '../../css/h/hqec9ivlc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nsmnqk5do"/><path class="hqec9ivlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-tester-20-bold"} {...others} />);
}

export default Component;
