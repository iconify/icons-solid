import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch7d5hy0v.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="ch7d5hy0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:newspaper"} {...others} />);
}

export default Component;
