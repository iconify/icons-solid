import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfkom2b1l.css';
import '../../css/l/lja5wgb3w.css';
import '../../css/k/k0evexoqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vfkom2b1l"/><path clip-rule="evenodd" class="lja5wgb3w"/><circle class="k0evexoqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-box-light"} {...others} />);
}

export default Component;
