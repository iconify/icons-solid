import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rk_d9jdgt.css';
import '../../css/f/fnqp5ja6e.css';
import '../../css/l/l97qv2b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rk_d9jdgt"/><path class="fnqp5ja6e"/><path class="l97qv2b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brain-sparkle"} {...others} />);
}

export default Component;
