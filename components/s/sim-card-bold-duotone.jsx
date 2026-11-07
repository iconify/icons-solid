import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-vry1bva.css';
import '../../css/z/za4fsnh-m.css';
import '../../css/m/m10r4ya4l.css';
import '../../css/y/y1djb4dsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-vry1bva"/><path class="za4fsnh-m"/><path class="m10r4ya4l"/><path class="y1djb4dsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-card-bold-duotone"} {...others} />);
}

export default Component;
