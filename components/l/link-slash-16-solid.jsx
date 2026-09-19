import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc6ou7bft.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gc6ou7bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:link-slash-16-solid"} {...others} />);
}

export default Component;
