import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8qo2ibht.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="o8qo2ibht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-middle-outline"} {...others} />);
}

export default Component;
