import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fulicxqoo.css';
import '../../css/s/syle989sw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fulicxqoo"/><path class="syle989sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunrise-20-bold"} {...others} />);
}

export default Component;
