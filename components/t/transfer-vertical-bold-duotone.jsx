import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx4zoabor.css';
import '../../css/p/pm4bswxgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qx4zoabor"/><path class="pm4bswxgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-bold-duotone"} {...others} />);
}

export default Component;
