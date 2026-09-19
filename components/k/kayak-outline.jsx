import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0s98rd3b.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="z0s98rd3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:kayak-outline"} {...others} />);
}

export default Component;
