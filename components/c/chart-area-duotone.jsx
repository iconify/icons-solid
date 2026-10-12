import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyfjcqbwm.css';
import '../../css/s/slcgv9bsj.css';
import '../../css/v/vaxyf-bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kyfjcqbwm"/><path class="slcgv9bsj"/><path class="vaxyf-bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-area-duotone"} {...others} />);
}

export default Component;
