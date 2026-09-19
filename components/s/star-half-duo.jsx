import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0e5sw3yl.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="u0e5sw3yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-half-duo"} {...others} />);
}

export default Component;
