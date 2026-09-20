import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v91oebczy.css';
import '../../css/r/rdg5s2amp.css';
import '../../css/o/o_0ccoams.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v91oebczy"/><path class="rdg5s2amp"/><path class="o_0ccoams"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:file-import-light"} {...others} />);
}

export default Component;
