import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1cr6bcvg.css';
import '../../css/e/ez1fa5boc.css';
import '../../css/e/e1nkl0b7d.css';
import '../../css/o/oyw5lob6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(180 22.25 18.61)" class="u1cr6bcvg"/><path class="ez1fa5boc"/><path class="e1nkl0b7d"/><path class="oyw5lob6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-image-horizontal"} {...others} />);
}

export default Component;
