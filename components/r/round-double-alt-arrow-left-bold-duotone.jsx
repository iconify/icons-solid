import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt4erfbgl.css';
import '../../css/o/o8houvrgo.css';
import '../../css/m/mijy_4gbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt4erfbgl"/><path class="o8houvrgo"/><path class="mijy_4gbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
