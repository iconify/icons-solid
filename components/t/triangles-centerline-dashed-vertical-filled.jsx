import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axlcm-b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axlcm-b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:triangles-centerline-dashed-vertical-filled"} {...others} />);
}

export default Component;
