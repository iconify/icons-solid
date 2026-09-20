import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n56ae_bgb.css';
import '../../css/j/jigbsmb_n.css';
import '../../css/l/l2vhs6x9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n56ae_bgb"/><path class="jigbsmb_n"/><path class="l2vhs6x9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:diskover"} {...others} />);
}

export default Component;
