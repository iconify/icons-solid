import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3gx4zblf.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="p3gx4zblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:keycap-bold"} {...others} />);
}

export default Component;
