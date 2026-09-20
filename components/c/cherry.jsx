import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j44__q_ya.css';
import '../../css/w/w2xlocbho.css';
import '../../css/v/v6pm7jb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j44__q_ya"/><path class="w2xlocbho"/><path class="v6pm7jb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cherry"} {...others} />);
}

export default Component;
