import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt-_m9ssp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lt-_m9ssp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:downwards-arrow-to-bar"} {...others} />);
}

export default Component;
