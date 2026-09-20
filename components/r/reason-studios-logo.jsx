import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/imdv_ebmd.css';
import '../../css/s/sxgmmi61m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="imdv_ebmd"/><path class="sxgmmi61m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:reason-studios-logo"} {...others} />);
}

export default Component;
