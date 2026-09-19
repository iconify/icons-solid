import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z7usppbvv.css';
import '../../css/l/l40iy_69f.css';
import '../../css/w/wx3_y2t5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z7usppbvv"/><circle class="l40iy_69f"/><path class="wx3_y2t5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medal-06"} {...others} />);
}

export default Component;
