import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfyy1timd.css';
import '../../css/p/p7q2zbbrp.css';
import '../../css/s/s9yzznvaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mfyy1timd"/><path class="p7q2zbbrp"/><path class="s9yzznvaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:tux"} {...others} />);
}

export default Component;
