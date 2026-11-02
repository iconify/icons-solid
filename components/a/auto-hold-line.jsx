import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbx4vpbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbx4vpbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:auto-hold-line"} {...others} />);
}

export default Component;
