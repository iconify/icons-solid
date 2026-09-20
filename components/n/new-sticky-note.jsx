import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/x1itkxbgq.css';
import '../../css/n/n54b1xycr.css';
import '../../css/y/yf3_bqbtx.css';
import '../../css/g/gyfuumb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="x1itkxbgq"/><path class="n54b1xycr"/><path class="yf3_bqbtx"/><path class="gyfuumb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:new-sticky-note"} {...others} />);
}

export default Component;
