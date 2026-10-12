import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6xnjzbga.css';
import '../../css/k/k7by-rbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6xnjzbga"/><path clip-rule="evenodd" class="k7by-rbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pinned-filled"} {...others} />);
}

export default Component;
