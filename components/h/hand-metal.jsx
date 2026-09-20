import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vw08w4ikn.css';
import '../../css/z/z7ms-ibyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vw08w4ikn"/><path class="z7ms-ibyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-metal"} {...others} />);
}

export default Component;
