import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpta62pcs.css';
import '../../css/c/c6-vmvbdd.css';
import '../../css/f/fh57rqojb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fpta62pcs"/><path class="c6-vmvbdd"/><path class="fh57rqojb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:door-open-duo"} {...others} />);
}

export default Component;
