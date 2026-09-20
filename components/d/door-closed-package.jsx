import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8n3vrsaz.css';
import '../../css/r/rgugm1w5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r8n3vrsaz"/><rect class="rgugm1w5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:door-closed-package"} {...others} />);
}

export default Component;
