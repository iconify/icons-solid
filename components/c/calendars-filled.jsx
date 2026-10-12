import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrqlv4q8g.css';
import '../../css/g/gc181eckg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrqlv4q8g"/><path class="gc181eckg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendars-filled"} {...others} />);
}

export default Component;
