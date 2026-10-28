import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rn_m4cbcl.css';
import '../../css/v/vy1v6kb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rn_m4cbcl"/><ellipse class="vy1v6kb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hockey-stick"} {...others} />);
}

export default Component;
