import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quv4pachk.css';
import '../../css/h/hou8klbpj.css';
import '../../css/z/zsp-qfjre.css';
import '../../css/r/r9338kb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="quv4pachk"/><path class="hou8klbpj"/><path class="zsp-qfjre"/><path class="r9338kb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:computer-ram"} {...others} />);
}

export default Component;
