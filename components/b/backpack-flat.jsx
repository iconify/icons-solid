import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjxp4acqq.css';
import '../../css/y/yofcqjmea.css';
import '../../css/j/jitf4bb3l.css';
import '../../css/j/j1sff6bjf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wjxp4acqq"/><path class="yofcqjmea"/><path class="jitf4bb3l"/><path clip-rule="evenodd" class="j1sff6bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:backpack-flat"} {...others} />);
}

export default Component;
