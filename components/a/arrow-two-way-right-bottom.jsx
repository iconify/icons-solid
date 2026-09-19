import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw5wg-jpn.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="cw5wg-jpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:arrow-two-way-right-bottom"} {...others} />);
}

export default Component;
