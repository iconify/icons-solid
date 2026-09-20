import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cps_kfs1y.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="cps_kfs1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:video-camera-f"} {...others} />);
}

export default Component;
