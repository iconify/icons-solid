import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwl9mh0ik.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bwl9mh0ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-right-arrow-left"} {...others} />);
}

export default Component;
