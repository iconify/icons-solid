import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvu1mm2xr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvu1mm2xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heart-alt-round"} {...others} />);
}

export default Component;
