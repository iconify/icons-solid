import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiuit_b-v.css';

const viewBox = {"width":1542,"height":1542};
const content = `<path class="xiuit_b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wind-direction-w"} {...others} />);
}

export default Component;
