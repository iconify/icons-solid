import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uenypmw8h.css';
import '../../css/o/o2lgrpb8j.css';
import '../../css/p/py5qyfban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uenypmw8h"/><path class="o2lgrpb8j"/><path class="py5qyfban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-1"} {...others} />);
}

export default Component;
