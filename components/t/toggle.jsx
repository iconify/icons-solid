import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctmlb8_7m.css';
import '../../css/b/b1zejdv0v.css';
import '../../css/s/s4_dt9c8s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ctmlb8_7m"><path class="b1zejdv0v"/><path class="s4_dt9c8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:toggle"} {...others} />);
}

export default Component;
