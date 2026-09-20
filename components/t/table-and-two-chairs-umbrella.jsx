import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omeljc3-r.css';
import '../../css/s/sz6wmubsl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="omeljc3-r"/><path class="sz6wmubsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:table-and-two-chairs-umbrella"} {...others} />);
}

export default Component;
