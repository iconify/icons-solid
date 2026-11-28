import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sr1vlw5wv.css';
import '../../css/y/ygn003bwe.css';
import '../../css/t/tgob03bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sr1vlw5wv"/><path class="ygn003bwe"/><path class="tgob03bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-down-through-line"} {...others} />);
}

export default Component;
