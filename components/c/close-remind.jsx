import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk5t_ojsa.css';
import '../../css/w/wul7eor8q.css';
import '../../css/r/r46gmxbij.css';
import '../../css/z/z1tcktbai.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bk5t_ojsa"/><path class="wul7eor8q"/><path clip-rule="evenodd" class="r46gmxbij"/><path class="z1tcktbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:close-remind"} {...others} />);
}

export default Component;
