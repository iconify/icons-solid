import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9h87yb9c.css';
import '../../css/j/jkn1k3bqn.css';
import '../../css/d/d6ao8lora.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="s9h87yb9c"><path clip-rule="evenodd" class="jkn1k3bqn"/><path class="d6ao8lora"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:map-marker"} {...others} />);
}

export default Component;
