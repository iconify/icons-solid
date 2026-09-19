import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/m8aomxbbb.css';
import '../../css/z/z9kiv3ory.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="m8aomxbbb"/><path class="z9kiv3ory"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:link"} {...others} />);
}

export default Component;
