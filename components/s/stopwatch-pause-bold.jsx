import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k66ipdb2y.css';
import '../../css/u/u806m8xap.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k66ipdb2y"/><path class="u806m8xap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-pause-bold"} {...others} />);
}

export default Component;
