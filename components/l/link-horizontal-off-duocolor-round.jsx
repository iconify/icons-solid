import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yslnx84sq.css';
import '../../css/w/w23wm3bzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yslnx84sq"/><path class="w23wm3bzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-horizontal-off-duocolor-round"} {...others} />);
}

export default Component;
