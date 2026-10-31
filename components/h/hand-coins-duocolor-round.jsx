import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z7ivyjbuf.css';
import '../../css/c/cw_0qobox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z7ivyjbuf"/><path class="cw_0qobox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hand-coins-duocolor-round"} {...others} />);
}

export default Component;
