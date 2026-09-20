import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dug7ikade.css';
import '../../css/r/rdpa0xr8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dug7ikade"/><path class="rdpa0xr8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:truck-off"} {...others} />);
}

export default Component;
