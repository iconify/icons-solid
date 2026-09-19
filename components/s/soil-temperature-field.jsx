import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y0pnzz87o.css';
import '../../css/g/gdr62dbcz.css';
import '../../css/l/lnplwwnva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="y0pnzz87o"/><path class="gdr62dbcz"/><path class="lnplwwnva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:soil-temperature-field"} {...others} />);
}

export default Component;
