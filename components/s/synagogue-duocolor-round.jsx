import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wbmm5u2vb.css';
import '../../css/a/aob6o6blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wbmm5u2vb"/><path class="aob6o6blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:synagogue-duocolor-round"} {...others} />);
}

export default Component;
