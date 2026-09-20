import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi6h56bsp.css';
import '../../css/g/gy3cywbxh.css';
import '../../css/s/s9nqbubze.css';
import '../../css/d/d4x0aztes.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vi6h56bsp"/><path class="gy3cywbxh"/><path class="s9nqbubze"/><path class="d4x0aztes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-very-shocked"} {...others} />);
}

export default Component;
