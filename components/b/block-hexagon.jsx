import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/e/efm26jbnu.css';
import '../../css/p/pmttpcbfo.css';
import '../../css/a/a0hdqrbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="efm26jbnu"/><path class="pmttpcbfo"/><path class="a0hdqrbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:block-hexagon"} {...others} />);
}

export default Component;
