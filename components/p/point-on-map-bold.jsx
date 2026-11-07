import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydzcg6vpe.css';
import '../../css/m/m20a56bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ydzcg6vpe"/><path clip-rule="evenodd" class="m20a56bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-bold"} {...others} />);
}

export default Component;
