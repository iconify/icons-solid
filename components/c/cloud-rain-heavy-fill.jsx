import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4pf3kmmn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w4pf3kmmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cloud-rain-heavy-fill"} {...others} />);
}

export default Component;
