import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e87y_-jlc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="e87y_-jlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-light-2-outline"} {...others} />);
}

export default Component;
