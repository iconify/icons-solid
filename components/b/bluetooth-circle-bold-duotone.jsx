import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/j/j8nkcq8nt.css';
import '../../css/y/y7jx548qp.css';
import '../../css/k/kwcn3zb7c.css';
import '../../css/j/j0-ydacal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="j8nkcq8nt"/><path class="y7jx548qp"/><path class="kwcn3zb7c"/><path clip-rule="evenodd" class="j0-ydacal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-circle-bold-duotone"} {...others} />);
}

export default Component;
