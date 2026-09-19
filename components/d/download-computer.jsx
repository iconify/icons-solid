import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a287lnbhf.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/p/p8o016kgn.css';
import '../../css/e/ew936lb8l.css';
import '../../css/j/jwqm-7brh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="a287lnbhf"/><path class="rgpfwjbgz"/><path class="p8o016kgn"/><path class="ew936lb8l"/><path class="jwqm-7brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:download-computer"} {...others} />);
}

export default Component;
