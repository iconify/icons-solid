import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gynbqr-dq.css';
import '../../css/b/bc12dyb7h.css';
import '../../css/i/imc2uccfr.css';
import '../../css/i/i0917pbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gynbqr-dq"/><path class="bc12dyb7h"/><path class="imc2uccfr"/><path class="i0917pbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:crutch"} {...others} />);
}

export default Component;
