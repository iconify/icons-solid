import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb-pr3vku.css';
import '../../css/u/u8r4mnbnn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rb-pr3vku"/><path class="u8r4mnbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-large-square"} {...others} />);
}

export default Component;
