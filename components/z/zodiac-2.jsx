import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/sgz3rlbjr.css';
import '../../css/y/yhwctlb5k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="sgz3rlbjr"/><path class="yhwctlb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:zodiac-2"} {...others} />);
}

export default Component;
