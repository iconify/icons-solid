import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rayco9bbe.css';
import '../../css/p/p1v9mob6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rayco9bbe"/><path class="p1v9mob6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:handheld-alt-2"} {...others} />);
}

export default Component;
