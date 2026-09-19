import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-847bcbd.css';
import '../../css/q/qfd3y4bqn.css';
import '../../css/f/fik22ihad.css';
import '../../css/a/ajnjn5bpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g-847bcbd"/><path class="qfd3y4bqn"/><path class="fik22ihad"/><path class="ajnjn5bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:green-new-energy"} {...others} />);
}

export default Component;
