import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhnmlcbim.css';
import '../../css/g/gckexl3_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mhnmlcbim"/><path class="gckexl3_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:nanotechnology"} {...others} />);
}

export default Component;
