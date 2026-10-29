import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fpglqv-gs.css';
import '../../css/t/t9pcyccbw.css';
import '../../css/j/jy8q_ab6y.css';
import '../../css/d/dnk0jsb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fpglqv-gs"/><path class="t9pcyccbw"/><path class="jy8q_ab6y"/><path class="dnk0jsb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flag-checkered"} {...others} />);
}

export default Component;
