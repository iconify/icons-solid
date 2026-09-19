import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3-dh46ae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3-dh46ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-alt-2-filled"} {...others} />);
}

export default Component;
