import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crqs91boh.css';
import '../../css/s/sxbjau1tw.css';

const viewBox = {"width":181.048,"height":23.983,"left":-0.679,"top":-0.679};
const content = `<path class="crqs91boh"/><path class="sxbjau1tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cvs"} {...others} />);
}

export default Component;
