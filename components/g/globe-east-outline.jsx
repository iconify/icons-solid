import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb9jrro5s.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="rb9jrro5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-east-outline"} {...others} />);
}

export default Component;
