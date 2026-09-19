import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w1hsn6t8r.css';
import '../../css/n/nhvaaib1t.css';
import '../../css/r/rmxvjqpqd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="w1hsn6t8r"/><path class="nhvaaib1t"/><path class="rmxvjqpqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:signal-2"} {...others} />);
}

export default Component;
