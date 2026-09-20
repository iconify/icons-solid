import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3d296bmx.css';
import '../../css/g/g3e73qb8p.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG973ANSrX"><g class="ft5dv1b6b"><path class="n3d296bmx"/><path class="g3e73qb8p"/></g></mask></defs><path mask="url(#SVG973ANSrX)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-alt-duotone"} {...others} />);
}

export default Component;
