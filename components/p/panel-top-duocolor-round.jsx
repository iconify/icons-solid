import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fg9f2g5hk.css';
import '../../css/r/rxftmk89r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fg9f2g5hk"/><path class="rxftmk89r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-top-duocolor-round"} {...others} />);
}

export default Component;
