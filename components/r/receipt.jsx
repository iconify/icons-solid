import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ht47y72rz.css';
import '../../css/l/lls52bcwg.css';
import '../../css/x/x-c9wobbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ht47y72rz"/><path class="lls52bcwg"/><path class="x-c9wobbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:receipt"} {...others} />);
}

export default Component;
