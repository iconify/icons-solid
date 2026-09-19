import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez1wi6bon.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="ez1wi6bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-long-outline"} {...others} />);
}

export default Component;
