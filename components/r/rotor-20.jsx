import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zipe_1bgb.css';
import '../../css/w/w2ey4wbpi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zipe_1bgb"/><path class="w2ey4wbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotor-20"} {...others} />);
}

export default Component;
