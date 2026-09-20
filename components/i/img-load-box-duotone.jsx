import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-salgbqh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r510o-b0x.css';
import '../../css/w/wyuyu03vy.css';
import '../../css/s/ssbjp9b9f.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGsrg0ndkk" width="18" height="18" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="f-salgbqh"/></mask><g class="ft5dv1b6b"><g mask="url(#SVGsrg0ndkk)"><path class="r510o-b0x"/></g><path class="wyuyu03vy"/><circle class="ssbjp9b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-load-box-duotone"} {...others} />);
}

export default Component;
