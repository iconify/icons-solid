import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7pg-2h_g.css';
import '../../css/i/imlaihv-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x7pg-2h_g"/><path class="imlaihv-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:instagram-duocolor-round"} {...others} />);
}

export default Component;
