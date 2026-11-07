import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv_i5e0rq.css';
import '../../css/r/rp13nxwka.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dv_i5e0rq"/><path class="rp13nxwka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tram-bold"} {...others} />);
}

export default Component;
