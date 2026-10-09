import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkdf61nwz.css';
import '../../css/h/hubzclpum.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkdf61nwz"/><path class="hubzclpum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-cloud-20"} {...others} />);
}

export default Component;
