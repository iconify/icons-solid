import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dspcfbcdf.css';
import '../../css/m/musj4wbba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dspcfbcdf"/><rect class="musj4wbba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:video"} {...others} />);
}

export default Component;
