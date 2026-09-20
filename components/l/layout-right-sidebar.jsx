import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k9s0t_7tw.css';
import '../../css/r/rg2ptfjgv.css';
import '../../css/e/ejvfr-qjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k9s0t_7tw"/><path class="rg2ptfjgv"/><path class="ejvfr-qjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:layout-right-sidebar"} {...others} />);
}

export default Component;
