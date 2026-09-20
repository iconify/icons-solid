import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwluicbct.css';
import '../../css/p/pyfv0ab6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hwluicbct"/><path class="pyfv0ab6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-open"} {...others} />);
}

export default Component;
