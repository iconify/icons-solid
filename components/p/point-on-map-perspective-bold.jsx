import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8cq6cc5u.css';
import '../../css/m/mjdmcab3w.css';
import '../../css/t/tq7go-bpr.css';
import '../../css/d/dld29ukqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8cq6cc5u"/><path class="mjdmcab3w"/><path class="tq7go-bpr"/><path class="dld29ukqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-perspective-bold"} {...others} />);
}

export default Component;
