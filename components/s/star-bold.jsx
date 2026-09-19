import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvd_l_cdt.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="rvd_l_cdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-bold"} {...others} />);
}

export default Component;
