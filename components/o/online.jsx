import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eo3_6m3sl.css';
import '../../css/x/x14um8b7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="eo3_6m3sl"/><path class="x14um8b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:online"} {...others} />);
}

export default Component;
