import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja9-_j11q.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ja9-_j11q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:heart-white-suit-circled-small-filled"} {...others} />);
}

export default Component;
