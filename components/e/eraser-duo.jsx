import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmytp6btb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kkh72vl5e.css';
import '../../css/i/ix1a3ybiw.css';
import '../../css/h/hve8fgbma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmytp6btb secondary"/><g class="dt0cm9dhy primary"><path class="kkh72vl5e"/><path class="ix1a3ybiw"/><path class="hve8fgbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:eraser-duo"} {...others} />);
}

export default Component;
