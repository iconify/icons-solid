import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3r0drnxu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q3r0drnxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:calendar3-event-fill"} {...others} />);
}

export default Component;
