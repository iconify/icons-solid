import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h1-anpb6p.css';
import '../../css/t/tgvgklbeu.css';
import '../../css/z/zkw1kudca.css';
import '../../css/d/de1eq2fsl.css';
import '../../css/z/zhwb5cb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h1-anpb6p wm-shadow"/><path class="tgvgklbeu wm-shadow"/><path class="zkw1kudca"/><path class="de1eq2fsl"/><path class="zhwb5cb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:smartphone"} {...others} />);
}

export default Component;
