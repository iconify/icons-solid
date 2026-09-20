import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5xyj_yyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5xyj_yyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:3d-cube-sphere-off"} {...others} />);
}

export default Component;
