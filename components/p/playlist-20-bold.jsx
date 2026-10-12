import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aav7v0ikn.css';
import '../../css/q/q590whb4l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aav7v0ikn"/><path class="q590whb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:playlist-20-bold"} {...others} />);
}

export default Component;
