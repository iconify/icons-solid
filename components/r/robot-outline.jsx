import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afyoo0b7p.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="afyoo0b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-outline"} {...others} />);
}

export default Component;
