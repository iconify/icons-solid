import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7iziobxo.css';
import '../../css/v/vkjczyb4h.css';
import '../../css/j/jln9ezbnx.css';
import '../../css/h/h1boidc1q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y7iziobxo"/><path class="vkjczyb4h"/><path clip-rule="evenodd" class="jln9ezbnx"/><path class="h1boidc1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:scissors-open"} {...others} />);
}

export default Component;
