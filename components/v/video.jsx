import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbzob9b3h.css';
import '../../css/d/dx3r8qbcz.css';
import '../../css/n/ny1tw4bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="gbzob9b3h"/><rect class="dx3r8qbcz"/><path class="ny1tw4bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video"} {...others} />);
}

export default Component;
