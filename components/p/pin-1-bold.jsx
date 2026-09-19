import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cnd_dgu3m.css';
import '../../css/g/g1q2j2bas.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="cnd_dgu3m"/><path class="g1q2j2bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pin-1-bold"} {...others} />);
}

export default Component;
