import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km7n7_jaf.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="km7n7_jaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:ear-listen"} {...others} />);
}

export default Component;
