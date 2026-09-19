import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixa9i89oh.css';
import '../../css/m/mj6mvfbak.css';
import '../../css/f/f1lq2jbwk.css';
import '../../css/q/q2lp95bup.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ixa9i89oh"/><path class="mj6mvfbak"/><path class="f1lq2jbwk"/><path class="q2lp95bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:farm-duo"} {...others} />);
}

export default Component;
