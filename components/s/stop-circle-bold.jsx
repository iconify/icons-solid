import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4m2zw2yc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="z4m2zw2yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-circle-bold"} {...others} />);
}

export default Component;
