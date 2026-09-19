import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6b8s_bci.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="c6b8s_bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:fisted-hand-sign"} {...others} />);
}

export default Component;
