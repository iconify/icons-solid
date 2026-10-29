import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjaro1bfj.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/t/t1q1i-8uy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mjaro1bfj"/><path class="qr4ochb5c wm-s"/><path class="t1q1i-8uy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-off-duo"} {...others} />);
}

export default Component;
