import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mffpo8b1l.css';
import '../../css/l/lhrsd3bjm.css';
import '../../css/u/ufg_ywe-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mffpo8b1l"/><path class="lhrsd3bjm"/><path clip-rule="evenodd" class="ufg_ywe-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:notebook-flat"} {...others} />);
}

export default Component;
