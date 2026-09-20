import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc50e7bly.css';
import '../../css/b/bri85kbqp.css';
import '../../css/l/l-4z_-b_x.css';
import '../../css/b/b-v3dtbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zc50e7bly"/><circle class="bri85kbqp"/><path class="l-4z_-b_x"/><circle class="b-v3dtbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pram"} {...others} />);
}

export default Component;
