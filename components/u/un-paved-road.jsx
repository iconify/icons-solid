import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vz_q47b8t.css';
import '../../css/d/d4f2oou9v.css';
import '../../css/f/fthhtu5wy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vz_q47b8t"/><path clip-rule="evenodd" class="d4f2oou9v"/><path class="fthhtu5wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:un-paved-road"} {...others} />);
}

export default Component;
