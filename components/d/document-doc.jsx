import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/txbp27bkm.css';
import '../../css/z/zksrmu4ln.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="txbp27bkm"/><path class="zksrmu4ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-doc"} {...others} />);
}

export default Component;
