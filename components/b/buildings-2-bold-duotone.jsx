import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8ld33dpy.css';
import '../../css/x/x7pqpmbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8ld33dpy"/><path clip-rule="evenodd" class="x7pqpmbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-2-bold-duotone"} {...others} />);
}

export default Component;
