import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p0ewt213x.css';
import '../../css/j/jgkke34ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p0ewt213x"/><path class="jgkke34ed wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-open"} {...others} />);
}

export default Component;
