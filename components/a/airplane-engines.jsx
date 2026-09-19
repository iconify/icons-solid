import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyuiy0bca.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xyuiy0bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:airplane-engines"} {...others} />);
}

export default Component;
