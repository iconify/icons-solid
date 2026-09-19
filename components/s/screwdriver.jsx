import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwqz4hyhx.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="mwqz4hyhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:screwdriver"} {...others} />);
}

export default Component;
