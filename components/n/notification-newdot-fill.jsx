import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1lw11bht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1lw11bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:notification-newdot-fill"} {...others} />);
}

export default Component;
