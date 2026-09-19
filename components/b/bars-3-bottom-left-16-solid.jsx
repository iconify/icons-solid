import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcv2s-lwn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gcv2s-lwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bars-3-bottom-left-16-solid"} {...others} />);
}

export default Component;
