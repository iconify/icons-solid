import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em2davzvf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="em2davzvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clipboard-list-stroke-16"} {...others} />);
}

export default Component;
