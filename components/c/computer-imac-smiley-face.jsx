import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7qb4hneu.css';
import '../../css/e/edsv-ybyq.css';
import '../../css/d/dd035uesk.css';
import '../../css/h/h5iwzijlj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g7qb4hneu"/><path class="edsv-ybyq"/><path class="dd035uesk"/><path class="h5iwzijlj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:computer-imac-smiley-face"} {...others} />);
}

export default Component;
