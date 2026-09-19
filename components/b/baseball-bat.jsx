import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww1487byk.css';
import '../../css/b/b6cjujs6z.css';
import '../../css/i/i2n_j2bus.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ww1487byk"/><path class="b6cjujs6z"/><path class="i2n_j2bus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:baseball-bat"} {...others} />);
}

export default Component;
