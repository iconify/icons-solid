import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9ehq2mog.css';
import '../../css/i/ij_095b6z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l9ehq2mog"/><path class="ij_095b6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-camera-20"} {...others} />);
}

export default Component;
