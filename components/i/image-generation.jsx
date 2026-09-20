import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_gsv3buj.css';
import '../../css/m/mx3kewvpy.css';
import '../../css/n/nxrf-56kt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n_gsv3buj"/><path class="mx3kewvpy"/><path class="nxrf-56kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:image-generation"} {...others} />);
}

export default Component;
