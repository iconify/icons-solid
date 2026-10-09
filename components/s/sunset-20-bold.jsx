import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fulicxqoo.css';
import '../../css/e/e8evysbwy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fulicxqoo"/><path class="e8evysbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunset-20-bold"} {...others} />);
}

export default Component;
