import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gky5p7x4z.css';
import '../../css/i/im5j4qgvv.css';
import '../../css/a/aebl4yb_c.css';
import '../../css/t/t4-s2vb6s.css';
import '../../css/r/rb0ck8bsp.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="gky5p7x4z"/><path class="im5j4qgvv"/><path class="aebl4yb_c"/><path class="t4-s2vb6s"/><path class="rb0ck8bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchtower"} {...others} />);
}

export default Component;
