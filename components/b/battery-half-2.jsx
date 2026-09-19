import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/chx-klxpy.css';
import '../../css/l/l7_dhtbao.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="chx-klxpy"/><path class="l7_dhtbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:battery-half-2"} {...others} />);
}

export default Component;
