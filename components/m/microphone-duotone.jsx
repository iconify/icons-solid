import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujxvzzb0u.css';
import '../../css/y/yr9l9-99x.css';
import '../../css/z/zu8di0bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ujxvzzb0u"/><rect class="yr9l9-99x"/><path class="zu8di0bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:microphone-duotone"} {...others} />);
}

export default Component;
