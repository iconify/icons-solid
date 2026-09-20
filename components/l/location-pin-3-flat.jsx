import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dk94vw9fq.css';
import '../../css/o/oiq1l-bde.css';
import '../../css/f/fxmdazbuy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dk94vw9fq"/><path clip-rule="evenodd" class="oiq1l-bde"/><path class="fxmdazbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:location-pin-3-flat"} {...others} />);
}

export default Component;
