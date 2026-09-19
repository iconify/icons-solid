import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ors6v7rpy.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="ors6v7rpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:leftwards-arrow-to-bar"} {...others} />);
}

export default Component;
