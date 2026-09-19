import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/llifecb5r.css';
import '../../css/k/k_sz5nb0n.css';
import '../../css/z/zh9gcsblg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="llifecb5r"/><path class="k_sz5nb0n"/><path class="zh9gcsblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-edit"} {...others} />);
}

export default Component;
