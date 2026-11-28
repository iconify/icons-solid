import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w1do95bqy.css';
import '../../css/r/rux1pnbud.css';
import '../../css/f/fgcsyup1y.css';
import '../../css/y/yhkm5ubbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w1do95bqy"/><path class="rux1pnbud"/><path class="fgcsyup1y"/><path class="yhkm5ubbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:expand"} {...others} />);
}

export default Component;
