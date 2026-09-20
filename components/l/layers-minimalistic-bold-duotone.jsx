import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/scnak0aak.css';
import '../../css/y/ytd1ty3sp.css';
import '../../css/v/vt9yw3war.css';
import '../../css/d/daais313j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="scnak0aak"/><path class="ytd1ty3sp"/></g><path class="vt9yw3war"/><path class="daais313j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
