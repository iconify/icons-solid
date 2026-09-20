import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq7w1ubzu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dq7w1ubzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:puzzle-piece-16"} {...others} />);
}

export default Component;
