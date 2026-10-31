import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpe7lzmwk.css';
import '../../css/b/b2o18jb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jpe7lzmwk"/><path class="b2o18jb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cctv-duocolor-round"} {...others} />);
}

export default Component;
