import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6plzccju.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iqpj3cywr.css';
import '../../css/x/xvgwadc1r.css';
import '../../css/n/nxx61nbqr.css';
import '../../css/j/jptgulbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary z6plzccju"/><g class="dt0cm9dhy primary"><path class="iqpj3cywr"/><path class="xvgwadc1r"/><path class="nxx61nbqr"/><path class="jptgulbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cactus-duo"} {...others} />);
}

export default Component;
