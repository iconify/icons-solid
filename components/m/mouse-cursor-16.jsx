import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy4eacc9q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cy4eacc9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mouse-cursor-16"} {...others} />);
}

export default Component;
