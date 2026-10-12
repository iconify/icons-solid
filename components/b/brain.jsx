import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_gnfz4mq.css';
import '../../css/f/fnqp5ja6e.css';
import '../../css/v/vhpl0i1fo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_gnfz4mq"/><path class="fnqp5ja6e"/><path class="vhpl0i1fo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brain"} {...others} />);
}

export default Component;
