import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kubz8lo_c.css';
import '../../css/e/elic3l99c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kubz8lo_c"/><path class="elic3l99c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-bold-duotone"} {...others} />);
}

export default Component;
