import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/ztdmoqbvc.css';
import '../../css/q/qj10p8mvv.css';
import '../../css/u/ukw3xqbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ztdmoqbvc"/><path class="qj10p8mvv wm-a"/><path class="ukw3xqbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bath-duo"} {...others} />);
}

export default Component;
