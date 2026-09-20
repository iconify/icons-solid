import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ibb5xccmv.css';
import '../../css/c/cq-1llb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ibb5xccmv"/><path class="cq-1llb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-cctv-off"} {...others} />);
}

export default Component;
