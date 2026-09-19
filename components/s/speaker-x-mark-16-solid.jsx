import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6xsvfb5o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m6xsvfb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:speaker-x-mark-16-solid"} {...others} />);
}

export default Component;
