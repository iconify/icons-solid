import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fci7w5bkp.css';
import '../../css/t/tmzthsb9o.css';
import '../../css/e/e_d1ucx9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fci7w5bkp"/><path class="tmzthsb9o"/><path class="e_d1ucx9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pound-sterling"} {...others} />);
}

export default Component;
