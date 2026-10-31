import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/db273ccix.css';
import '../../css/g/grcyshb6z.css';
import '../../css/q/q1r5hdu2e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="db273ccix"/><path class="grcyshb6z"/><path class="q1r5hdu2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:reindeer-pop"} {...others} />);
}

export default Component;
