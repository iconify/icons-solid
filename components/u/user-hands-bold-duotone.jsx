import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty-zevz5w.css';
import '../../css/o/o3avh5bju.css';
import '../../css/s/sm0skf1-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ty-zevz5w"/><path class="o3avh5bju"/><path class="sm0skf1-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-hands-bold-duotone"} {...others} />);
}

export default Component;
