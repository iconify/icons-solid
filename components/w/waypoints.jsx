import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pl4hfrbwi.css';
import '../../css/f/fh8u15b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pl4hfrbwi"/><path class="fh8u15b1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:waypoints"} {...others} />);
}

export default Component;
