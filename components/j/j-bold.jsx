import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggc7n1z-c.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="ggc7n1z-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:j-bold"} {...others} />);
}

export default Component;
