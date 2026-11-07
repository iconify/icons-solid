import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kddhlpb-n.css';
import '../../css/n/n26m0h08c.css';
import '../../css/d/d8p6fytrt.css';
import '../../css/k/k7oz8hhvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="kddhlpb-n"/><path class="n26m0h08c"/><path class="d8p6fytrt"/></g><path class="k7oz8hhvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-angle-bold-duotone"} {...others} />);
}

export default Component;
