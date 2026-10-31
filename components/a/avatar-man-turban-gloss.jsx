import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g0nd4q76s.css';
import '../../css/i/inic47bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="g0nd4q76s wm-k"/><path class="inic47bnq wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-turban-gloss"} {...others} />);
}

export default Component;
