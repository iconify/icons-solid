import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctuk4ds0v.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="ctuk4ds0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:circle-triangle-down"} {...others} />);
}

export default Component;
