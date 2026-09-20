import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o80ugf82p.css';
import '../../css/s/s7npbt_3e.css';
import '../../css/z/z8p1h9b2n.css';
import '../../css/x/x6_pr9-xf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o80ugf82p"/><path class="s7npbt_3e"/><path class="z8p1h9b2n"/><path class="x6_pr9-xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-photos-light"} {...others} />);
}

export default Component;
