import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcmpj11yd.css';
import '../../css/m/muxysx41s.css';
import '../../css/j/j582--bll.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xcmpj11yd"/><path class="muxysx41s"/><path clip-rule="evenodd" class="j582--bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tall-hat-flat"} {...others} />);
}

export default Component;
