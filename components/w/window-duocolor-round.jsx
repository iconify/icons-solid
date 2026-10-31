import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/adiypubxg.css';
import '../../css/l/ln97n7b5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="adiypubxg"/><path class="ln97n7b5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-duocolor-round"} {...others} />);
}

export default Component;
