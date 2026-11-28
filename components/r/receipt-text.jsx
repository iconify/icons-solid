import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ht47y72rz.css';
import '../../css/c/ciddswfer.css';
import '../../css/q/qhh_2fphk.css';
import '../../css/e/ekwgngs3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ht47y72rz"/><path class="ciddswfer"/><path class="qhh_2fphk"/><path class="ekwgngs3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:receipt-text"} {...others} />);
}

export default Component;
