import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/febx_bbdz.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="febx_bbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:arrow-thin-right-bottom"} {...others} />);
}

export default Component;
