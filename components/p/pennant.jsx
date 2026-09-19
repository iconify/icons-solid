import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xcqsw4v9t.css';
import '../../css/u/u73u14bjo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="xcqsw4v9t"/><path class="u73u14bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pennant"} {...others} />);
}

export default Component;
