import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g56tg2bmy.css';
import '../../css/d/dmp8t0bvq.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="g56tg2bmy"/><path class="dmp8t0bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:floppy-disk"} {...others} />);
}

export default Component;
