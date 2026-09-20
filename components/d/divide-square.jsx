import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d_gtx6-4w.css';
import '../../css/n/nmdl3nrdn.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="d_gtx6-4w"/><path class="nmdl3nrdn"/><rect class="z7h9dmbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:divide-square"} {...others} />);
}

export default Component;
