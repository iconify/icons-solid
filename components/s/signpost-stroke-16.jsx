import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9khw75hp.css';
import '../../css/x/xaq4gjbyd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i9khw75hp"/><path class="xaq4gjbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:signpost-stroke-16"} {...others} />);
}

export default Component;
