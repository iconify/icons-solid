import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rxf__865o.css';
import '../../css/l/l4kenyv0j.css';
import '../../css/q/qjo2kn20h.css';
import '../../css/k/k9l79-hyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="rxf__865o"/><rect class="l4kenyv0j"/><rect class="qjo2kn20h"/><path class="k9l79-hyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:tree-structure-outline"} {...others} />);
}

export default Component;
