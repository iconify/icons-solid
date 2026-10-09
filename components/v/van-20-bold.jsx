import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-4x9ob7y.css';
import '../../css/t/t47nc4b6q.css';
import '../../css/a/amdspubws.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-4x9ob7y"/><path class="t47nc4b6q"/><path class="amdspubws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:van-20-bold"} {...others} />);
}

export default Component;
