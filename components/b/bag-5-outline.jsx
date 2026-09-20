import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/er6r_h69p.css';
import '../../css/c/clm_vbe7p.css';
import '../../css/m/mjjpj9b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="er6r_h69p"/><path class="clm_vbe7p"/><path clip-rule="evenodd" class="mjjpj9b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-outline"} {...others} />);
}

export default Component;
