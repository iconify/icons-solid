import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p3n2n6afo.css';
import '../../css/q/qdcklghga.css';
import '../../css/o/osld-wb5b.css';
import '../../css/d/d1gdinb8l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p3n2n6afo"/><path class="qdcklghga"/><path class="osld-wb5b"/><path class="d1gdinb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:man-arm-raises-2-alternate"} {...others} />);
}

export default Component;
