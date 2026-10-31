import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g6r7bvjix.css';
import '../../css/n/n2pailbld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g6r7bvjix"/><path class="n2pailbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:taxi-duocolor-round"} {...others} />);
}

export default Component;
