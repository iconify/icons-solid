import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x02zofbjn.css';
import '../../css/t/t__73kbdf.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="x02zofbjn"/><path class="t__73kbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:test-tube-2"} {...others} />);
}

export default Component;
