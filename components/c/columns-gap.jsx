import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktf-o6bwk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ktf-o6bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:columns-gap"} {...others} />);
}

export default Component;
