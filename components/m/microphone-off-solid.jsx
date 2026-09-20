import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfj-wcb0g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cfj-wcb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:microphone-off-solid"} {...others} />);
}

export default Component;
