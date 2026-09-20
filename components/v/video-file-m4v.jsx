import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yf99hf6iy.css';
import '../../css/h/hwzyhq-sg.css';
import '../../css/e/ecv4jac-s.css';
import '../../css/r/rp1tcdb-a.css';
import '../../css/i/ih06rwyil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yf99hf6iy"/><path class="hwzyhq-sg"/><path class="ecv4jac-s"/><path class="rp1tcdb-a"/><path class="ih06rwyil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-file-m4v"} {...others} />);
}

export default Component;
