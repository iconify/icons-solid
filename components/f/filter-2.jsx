import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfxjvzb8q.css';
import '../../css/x/x1kdd3bji.css';
import '../../css/b/b6eynkbex.css';
import '../../css/n/nuw1jpblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cfxjvzb8q"/><path class="x1kdd3bji"/><path class="b6eynkbex"/><path class="nuw1jpblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:filter-2"} {...others} />);
}

export default Component;
