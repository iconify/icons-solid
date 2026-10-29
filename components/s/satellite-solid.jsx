import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ozpvzzbjk.css';
import '../../css/j/jd342ib1u.css';
import '../../css/l/lo4dh9lmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ozpvzzbjk"/><path class="jd342ib1u wm-a"/><path class="lo4dh9lmp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-solid"} {...others} />);
}

export default Component;
