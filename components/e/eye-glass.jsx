import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xh3bk-y4h.css';
import '../../css/s/scep2_r9g.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="xh3bk-y4h"/><path class="scep2_r9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:eye-glass"} {...others} />);
}

export default Component;
