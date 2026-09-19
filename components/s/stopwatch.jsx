import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxsh9jbsu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cxsh9jbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:stopwatch"} {...others} />);
}

export default Component;
