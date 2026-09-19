import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyr8vnyio.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="vyr8vnyio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sign-road-1"} {...others} />);
}

export default Component;
