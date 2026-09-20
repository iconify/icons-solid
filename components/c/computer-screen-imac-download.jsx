import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmvps3rqp.css';
import '../../css/u/u3skedcea.css';
import '../../css/f/fjvbaumvm.css';
import '../../css/i/iepp874wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mmvps3rqp"/><path class="u3skedcea"/><path class="fjvbaumvm"/><path class="iepp874wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:computer-screen-imac-download"} {...others} />);
}

export default Component;
