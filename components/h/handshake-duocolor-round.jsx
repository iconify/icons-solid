import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p3qamlbqg.css';
import '../../css/u/uqu_6uoth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p3qamlbqg"/><path class="uqu_6uoth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:handshake-duocolor-round"} {...others} />);
}

export default Component;
