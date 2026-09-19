import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-3g6wbey.css';
import '../../css/c/cgz79db7m.css';
import '../../css/i/iybkvhu5s.css';
import '../../css/d/d7zoicbnn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d-3g6wbey"/><path clip-rule="evenodd" class="cgz79db7m"/><path class="iybkvhu5s"/><path clip-rule="evenodd" class="d7zoicbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-minus-outline"} {...others} />);
}

export default Component;
