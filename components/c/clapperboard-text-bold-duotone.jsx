import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od2g0acza.css';
import '../../css/c/cxbhrab6z.css';
import '../../css/c/ch0lkibmx.css';
import '../../css/k/k5s_6-4ei.css';
import '../../css/d/dw6-rudva.css';
import '../../css/v/vz_jdh1qe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="od2g0acza"/><path class="cxbhrab6z"/><path class="ch0lkibmx"/><path class="k5s_6-4ei"/><path class="dw6-rudva"/><path class="vz_jdh1qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-text-bold-duotone"} {...others} />);
}

export default Component;
