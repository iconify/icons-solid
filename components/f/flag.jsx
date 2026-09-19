import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nmqind1sb.css';
import '../../css/k/khp4j9b5i.css';
import '../../css/s/sw2m0vb6b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nmqind1sb"/><path class="khp4j9b5i"/><path class="sw2m0vb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flag"} {...others} />);
}

export default Component;
