import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9z9ypwvx.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="c9z9ypwvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:screen-full"} {...others} />);
}

export default Component;
