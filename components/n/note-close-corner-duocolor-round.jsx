import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l9ycfeb_j.css';
import '../../css/z/zitfg43nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l9ycfeb_j"/><path class="zitfg43nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-close-corner-duocolor-round"} {...others} />);
}

export default Component;
