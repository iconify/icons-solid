import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/esykvidxt.css';
import '../../css/i/ib5oyob7o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="esykvidxt"/><path class="ib5oyob7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:chat"} {...others} />);
}

export default Component;
