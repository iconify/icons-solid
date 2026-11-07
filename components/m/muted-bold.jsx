import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpjfjpbop.css';
import '../../css/d/dqsya0j4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpjfjpbop"/><path class="dqsya0j4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:muted-bold"} {...others} />);
}

export default Component;
