import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l579irbip.css';
import '../../css/j/jin38zbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l579irbip"/><path class="jin38zbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:crop"} {...others} />);
}

export default Component;
