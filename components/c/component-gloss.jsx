import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/alend009w.css';
import '../../css/m/md8ioxb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="alend009w wm-k"/><path class="md8ioxb2g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:component-gloss"} {...others} />);
}

export default Component;
