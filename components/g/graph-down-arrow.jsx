import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q23mtcbsd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q23mtcbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:graph-down-arrow"} {...others} />);
}

export default Component;
