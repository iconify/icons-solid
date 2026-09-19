import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i07ac8bay.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i07ac8bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grid-2x2-stroke-16"} {...others} />);
}

export default Component;
