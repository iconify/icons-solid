import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hheg4_qjx.css';
import '../../css/u/umw-b_bys.css';
import '../../css/s/sz2_wis9c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hheg4_qjx"/><path class="umw-b_bys"/><path clip-rule="evenodd" class="sz2_wis9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-bin-flat"} {...others} />);
}

export default Component;
