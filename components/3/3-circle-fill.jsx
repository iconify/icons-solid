import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydg3l3bpm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ydg3l3bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:3-circle-fill"} {...others} />);
}

export default Component;
