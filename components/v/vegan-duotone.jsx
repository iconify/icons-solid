import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afarpnbpz.css';
import '../../css/h/hs_7v4d8f.css';
import '../../css/m/mxdyr1b6x.css';
import '../../css/p/pvoalybxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="afarpnbpz"/><path class="hs_7v4d8f"/><path class="mxdyr1b6x"/><path class="pvoalybxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:vegan-duotone"} {...others} />);
}

export default Component;
