import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mu4ajhnbi.css';
import '../../css/s/s6a9woy2h.css';
import '../../css/i/iem8lp2xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mu4ajhnbi"/><path class="s6a9woy2h"/><path class="iem8lp2xo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-add"} {...others} />);
}

export default Component;
