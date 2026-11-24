import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu04c6ibz.css';
import '../../css/l/ly-oin5oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eu04c6ibz"/><path clip-rule="evenodd" class="ly-oin5oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mouse-off-filled"} {...others} />);
}

export default Component;
