import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4xdc-b3f.css';
import '../../css/x/xnw8m44ry.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k4xdc-b3f"/><path class="xnw8m44ry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:captions-off-filled"} {...others} />);
}

export default Component;
