import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jzu91sbxz.css';
import '../../css/z/zw1gf9qvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jzu91sbxz"/><path class="zw1gf9qvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:webhook-duocolor-round"} {...others} />);
}

export default Component;
