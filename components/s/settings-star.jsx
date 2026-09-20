import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk16iftaw.css';
import '../../css/m/mu3-fq63x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dk16iftaw"/><path class="mu3-fq63x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-star"} {...others} />);
}

export default Component;
