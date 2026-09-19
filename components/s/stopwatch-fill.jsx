import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws9c__bwv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ws9c__bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:stopwatch-fill"} {...others} />);
}

export default Component;
