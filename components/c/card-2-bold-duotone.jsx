import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipje62d_x.css';
import '../../css/n/n65xcybdr.css';
import '../../css/v/v75m4zb9g.css';
import '../../css/t/tuasagb-m.css';
import '../../css/s/s6qd-zbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ipje62d_x"/><path clip-rule="evenodd" class="n65xcybdr"/><path class="v75m4zb9g"/><path class="tuasagb-m"/><path class="s6qd-zbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-2-bold-duotone"} {...others} />);
}

export default Component;
