import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atkc_vbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atkc_vbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:airplane-takeoff"} {...others} />);
}

export default Component;
