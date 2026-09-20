import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miehgxb5z.css';
import '../../css/e/ekhn6xp0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="miehgxb5z"/><path class="ekhn6xp0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:photo-album-2-line"} {...others} />);
}

export default Component;
