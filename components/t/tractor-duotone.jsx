import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9d27nb_x.css';
import '../../css/k/k48mjsb2e.css';
import '../../css/v/v1yg_pbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r9d27nb_x"/><path class="k48mjsb2e"/><path class="v1yg_pbbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tractor-duotone"} {...others} />);
}

export default Component;
