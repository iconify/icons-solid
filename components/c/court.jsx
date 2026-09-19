import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aow2fzbpk.css';
import '../../css/b/bk8ioe9xt.css';
import '../../css/m/mnvwpbaxq.css';
import '../../css/p/pkt9ptb8y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="aow2fzbpk"/><circle class="bk8ioe9xt"/><path class="mnvwpbaxq"/><path class="pkt9ptb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:court"} {...others} />);
}

export default Component;
