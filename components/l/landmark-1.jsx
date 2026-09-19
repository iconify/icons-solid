import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkmf4y6fo.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="tkmf4y6fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:landmark-1"} {...others} />);
}

export default Component;
