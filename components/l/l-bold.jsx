import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnwo8kn8b.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="xnwo8kn8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:l-bold"} {...others} />);
}

export default Component;
