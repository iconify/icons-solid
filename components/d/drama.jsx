import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x752294kp.css';
import '../../css/j/jb97shjez.css';
import '../../css/v/vuyokqbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x752294kp"/><path class="jb97shjez"/><path class="vuyokqbpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:drama"} {...others} />);
}

export default Component;
