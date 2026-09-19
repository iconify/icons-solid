import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lkan53bfs.css';
import '../../css/i/i5mhe742h.css';
import '../../css/d/db3mifblg.css';
import '../../css/a/a5xzuwbku.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lkan53bfs"/><path class="i5mhe742h"/><path class="db3mifblg"/><path class="a5xzuwbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:empty"} {...others} />);
}

export default Component;
