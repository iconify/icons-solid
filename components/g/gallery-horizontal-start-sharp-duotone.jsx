import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oeaywibmn.css';
import '../../css/t/tnbgngbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="oeaywibmn"/><path class="tnbgngbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-horizontal-start-sharp-duotone"} {...others} />);
}

export default Component;
