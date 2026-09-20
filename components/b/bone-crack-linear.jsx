import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr9yokbre.css';
import '../../css/k/kd1rx8bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sr9yokbre"/><path class="kd1rx8bnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-crack-linear"} {...others} />);
}

export default Component;
