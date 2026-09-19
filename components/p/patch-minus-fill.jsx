import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opnm4c39e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="opnm4c39e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:patch-minus-fill"} {...others} />);
}

export default Component;
