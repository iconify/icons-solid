import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku5-asgud.css';
import '../../css/h/hy5jsbbuj.css';
import '../../css/t/t32f0z35j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ku5-asgud"/><path class="hy5jsbbuj"/><path class="t32f0z35j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dego"} {...others} />);
}

export default Component;
