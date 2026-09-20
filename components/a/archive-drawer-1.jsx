import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ualmj68fj.css';
import '../../css/z/ztwn49cwd.css';
import '../../css/f/fn08j-b6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ualmj68fj"/><path class="ztwn49cwd"/><path class="fn08j-b6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:archive-drawer-1"} {...others} />);
}

export default Component;
