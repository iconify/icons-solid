import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ameo-pbvv.css';
import '../../css/u/ulw-1mb-v.css';
import '../../css/m/mnalv31ip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ameo-pbvv"/><path class="ulw-1mb-v wm-a"/><path class="mnalv31ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:feather-duo"} {...others} />);
}

export default Component;
