import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9-x1ja6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9-x1ja6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:crosshair-plus"} {...others} />);
}

export default Component;
