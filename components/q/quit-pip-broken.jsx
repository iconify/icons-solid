import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xnh1ybbye.css';
import '../../css/m/mqszbo63g.css';
import '../../css/d/dmrtm7e_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xnh1ybbye"/><path class="mqszbo63g"/><path class="dmrtm7e_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-pip-broken"} {...others} />);
}

export default Component;
