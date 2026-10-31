import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftu2crbdw.css';
import '../../css/i/ivrs26b2y.css';
import '../../css/u/ul86qe6tg.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="ftu2crbdw"/><path class="ivrs26b2y"/><circle class="ul86qe6tg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mk"} {...others} />);
}

export default Component;
