import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3he7ubvn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="i3he7ubvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cloud-arrow-up-16-solid"} {...others} />);
}

export default Component;
