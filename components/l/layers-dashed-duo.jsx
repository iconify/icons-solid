import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o8a3j1inw.css';
import '../../css/y/ygb5fvg-l.css';
import '../../css/f/f5gaxccbi.css';
import '../../css/h/h0pl2fp6o.css';
import '../../css/v/vqef7sbpb.css';
import '../../css/k/ky1-w1byj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o8a3j1inw"/><path class="ygb5fvg-l"/><path class="f5gaxccbi"/><path class="h0pl2fp6o"/><path class="vqef7sbpb"/><path class="ky1-w1byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-dashed-duo"} {...others} />);
}

export default Component;
