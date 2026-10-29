import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w439gnkso.css';
import '../../css/a/afxiy6lsc.css';
import '../../css/f/fmtboebos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w439gnkso wm-a"/><path class="afxiy6lsc"/><path class="fmtboebos wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shower-head"} {...others} />);
}

export default Component;
