import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgv6vob-r.css';
import '../../css/d/dr-zygb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgv6vob-r"/><path class="dr-zygb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-bold-duotone"} {...others} />);
}

export default Component;
