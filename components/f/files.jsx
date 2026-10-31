import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/czxpq-bqo.css';
import '../../css/z/zd58oybwj.css';
import '../../css/e/ejbiwrpyo.css';
import '../../css/e/e7n46hafx.css';
import '../../css/e/e4c6so9oo.css';
import '../../css/f/fhh79qjaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="czxpq-bqo wm-shadow"/><path class="zd58oybwj"/><path class="ejbiwrpyo"/><path class="e7n46hafx"/><path class="e4c6so9oo"/><path class="fhh79qjaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:files"} {...others} />);
}

export default Component;
