import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofe-j50dh.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="ofe-j50dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:circle-triangle-right"} {...others} />);
}

export default Component;
