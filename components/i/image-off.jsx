import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/izlatwbhd.css';
import '../../css/d/d31vs5_su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="izlatwbhd"/><path class="d31vs5_su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:image-off"} {...others} />);
}

export default Component;
