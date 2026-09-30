import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fxmqmgk0h.css';
import '../../css/e/ew83xsbwt.css';
import '../../css/k/konl6acji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fxmqmgk0h"/><path class="ew83xsbwt"/><path class="konl6acji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:printer-3d"} {...others} />);
}

export default Component;
