import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9j1fm6fb.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="b9j1fm6fb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:octagon-bold"} {...others} />);
}

export default Component;
