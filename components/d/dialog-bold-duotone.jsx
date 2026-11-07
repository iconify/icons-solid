import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2bl_ob4g.css';
import '../../css/m/m0pn6bzto.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y2bl_ob4g"/><path class="m0pn6bzto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-bold-duotone"} {...others} />);
}

export default Component;
