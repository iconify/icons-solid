import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i36v6ohrk.css';
import '../../css/t/tj541585v.css';
import '../../css/c/c78_xksqc.css';
import '../../css/s/se4lfetdc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i36v6ohrk"/><path class="tj541585v"/><path class="c78_xksqc"/><path class="se4lfetdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-backward-duo"} {...others} />);
}

export default Component;
