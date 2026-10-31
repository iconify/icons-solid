import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9k696pnq.css';
import '../../css/w/wqx177b_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y9k696pnq"/><path class="wqx177b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paw-duocolor-round"} {...others} />);
}

export default Component;
