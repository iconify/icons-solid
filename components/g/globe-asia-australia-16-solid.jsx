import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl31_-btt.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fl31_-btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:globe-asia-australia-16-solid"} {...others} />);
}

export default Component;
