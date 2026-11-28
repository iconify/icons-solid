import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6vqhb7q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v-1ltacmn.css';
import '../../css/p/potl1vbrd.css';
import '../../css/d/dxc5lhiyx.css';
import '../../css/k/kerqeobiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oj6vqhb7q secondary"/><g class="dt0cm9dhy primary"><path class="v-1ltacmn"/><path class="potl1vbrd"/><path class="dxc5lhiyx"/><path class="kerqeobiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:invoice-duo"} {...others} />);
}

export default Component;
