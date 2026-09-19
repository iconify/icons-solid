import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_2cp-b6p.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="c_2cp-b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:skull-1-bold"} {...others} />);
}

export default Component;
