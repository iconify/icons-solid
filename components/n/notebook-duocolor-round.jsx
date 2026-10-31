import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ra9bqhbdv.css';
import '../../css/z/z_mvxyb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ra9bqhbdv"/><path class="z_mvxyb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:notebook-duocolor-round"} {...others} />);
}

export default Component;
