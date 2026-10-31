import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/csazfyzrw.css';
import '../../css/h/hzhd0m6pb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="csazfyzrw wm-k"/><path class="hzhd0m6pb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-sparkles-gloss"} {...others} />);
}

export default Component;
