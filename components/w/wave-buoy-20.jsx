import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eji1th4ou.css';
import '../../css/w/wugtu-b6f.css';
import '../../css/t/td-qy1bhw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eji1th4ou"/><path class="wugtu-b6f"/><path class="td-qy1bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-buoy-20"} {...others} />);
}

export default Component;
