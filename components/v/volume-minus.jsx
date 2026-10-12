import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prr2mcb8x.css';
import '../../css/h/hiisiicmo.css';
import '../../css/e/erljhab3l.css';
import '../../css/g/gdf0stgap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="prr2mcb8x"/><path class="hiisiicmo"/><path class="erljhab3l"/><path class="gdf0stgap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volume-minus"} {...others} />);
}

export default Component;
