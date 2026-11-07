import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzpfhccmd.css';
import '../../css/y/yg46shszw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tzpfhccmd"/><path class="yg46shszw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cursor-bold-duotone"} {...others} />);
}

export default Component;
