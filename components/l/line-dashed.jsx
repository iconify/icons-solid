import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lnsnpcbvi.css';
import '../../css/a/aq6xpmbtf.css';
import '../../css/s/stp3nf4wl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lnsnpcbvi"/><path class="aq6xpmbtf"/><path class="stp3nf4wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-dashed"} {...others} />);
}

export default Component;
