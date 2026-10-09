import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zain2eb2r.css';
import '../../css/s/sk4ad7b3f.css';
import '../../css/e/epmi80zpc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zain2eb2r"/><path class="sk4ad7b3f"/><path class="epmi80zpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-clock-20"} {...others} />);
}

export default Component;
