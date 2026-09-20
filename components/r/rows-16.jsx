import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj5aerbtr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pj5aerbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:rows-16"} {...others} />);
}

export default Component;
