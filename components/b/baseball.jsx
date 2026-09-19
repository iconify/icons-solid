import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3etuu25j.css';
import '../../css/y/y5pksnbfj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v3etuu25j"/><path class="y5pksnbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:baseball"} {...others} />);
}

export default Component;
