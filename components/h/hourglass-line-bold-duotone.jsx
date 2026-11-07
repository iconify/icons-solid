import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv3dy9bge.css';
import '../../css/y/ye62so_7n.css';
import '../../css/i/im3g8pbea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jv3dy9bge"/><path clip-rule="evenodd" class="ye62so_7n"/><path class="im3g8pbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hourglass-line-bold-duotone"} {...others} />);
}

export default Component;
