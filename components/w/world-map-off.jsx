import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvr62lb_w.css';
import '../../css/p/pdo-3moav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yvr62lb_w"/><path class="pdo-3moav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-map-off"} {...others} />);
}

export default Component;
