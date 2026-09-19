import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q9bjn7-6w.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/l/lh95g-0gi.css';
import '../../css/h/hkp4-3bvm.css';
import '../../css/p/p8o016kgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="q9bjn7-6w"/><path class="rgpfwjbgz"/><path class="lh95g-0gi"/><path class="hkp4-3bvm"/><path class="p8o016kgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-computer"} {...others} />);
}

export default Component;
