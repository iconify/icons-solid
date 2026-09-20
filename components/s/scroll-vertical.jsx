import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfl6mp_wq.css';
import '../../css/p/p03-dy-ag.css';
import '../../css/m/mritzmbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dfl6mp_wq"/><path class="p03-dy-ag"/><path class="mritzmbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:scroll-vertical"} {...others} />);
}

export default Component;
