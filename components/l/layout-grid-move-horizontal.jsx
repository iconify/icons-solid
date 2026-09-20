import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gufd03s5p.css';
import '../../css/y/y2ls4efbx.css';
import '../../css/h/ha9vdabuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="gufd03s5p"/><rect class="y2ls4efbx"/><path class="ha9vdabuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:layout-grid-move-horizontal"} {...others} />);
}

export default Component;
