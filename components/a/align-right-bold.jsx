import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frcyxfb_h.css';
import '../../css/u/u1biqstsa.css';
import '../../css/g/grad3z_os.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="frcyxfb_h"/><path class="u1biqstsa"/><path class="grad3z_os"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-right-bold"} {...others} />);
}

export default Component;
