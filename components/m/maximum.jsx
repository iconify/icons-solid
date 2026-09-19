import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ac8ev1bcp.css';
import '../../css/r/rb_5at3_n.css';
import '../../css/p/pp64eobpo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ac8ev1bcp"/><path class="rb_5at3_n"/><path class="pp64eobpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:maximum"} {...others} />);
}

export default Component;
