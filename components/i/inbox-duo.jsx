import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1g5s_bga.css';
import '../../css/s/sosv7zf-y.css';
import '../../css/p/pk2ijs5sj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="q1g5s_bga"/><path class="sosv7zf-y"/><path class="pk2ijs5sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:inbox-duo"} {...others} />);
}

export default Component;
