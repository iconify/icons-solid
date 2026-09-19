import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-0eilb3d.css';
import '../../css/s/spf_dtebf.css';
import '../../css/v/vrm0gtb4l.css';
import '../../css/g/gi6z60bcb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q-0eilb3d"/><path class="spf_dtebf"/><path class="vrm0gtb4l"/><path class="gi6z60bcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:linuxmint-wordmark"} {...others} />);
}

export default Component;
