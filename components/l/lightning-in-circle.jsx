import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut17l-b_x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ut17l-b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:lightning-in-circle"} {...others} />);
}

export default Component;
