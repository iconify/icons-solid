import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpywgebrg.css';
import '../../css/v/v2zklq74z.css';
import '../../css/c/cg22ifrfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpywgebrg"/><path class="v2zklq74z"/><path class="cg22ifrfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-2-bold-duotone"} {...others} />);
}

export default Component;
