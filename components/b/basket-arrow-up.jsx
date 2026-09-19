import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic_j8siyi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ic_j8siyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:basket-arrow-up"} {...others} />);
}

export default Component;
