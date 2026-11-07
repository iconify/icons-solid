import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk87vthwz.css';
import '../../css/v/v7o6jqpbt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gk87vthwz"/><path class="v7o6jqpbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-bold-duotone"} {...others} />);
}

export default Component;
