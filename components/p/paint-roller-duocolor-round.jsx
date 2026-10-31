import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jj-e3pb_r.css';
import '../../css/j/j9sgwxzhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jj-e3pb_r"/><path class="j9sgwxzhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paint-roller-duocolor-round"} {...others} />);
}

export default Component;
