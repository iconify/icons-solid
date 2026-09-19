import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw4be009v.css';
import '../../css/z/z83-cpbxu.css';
import '../../css/d/d8y4jgmap.css';
import '../../css/d/d36s5v8ph.css';
import '../../css/q/qxc99_b7n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qw4be009v"/><path class="z83-cpbxu"/><path class="d8y4jgmap"/><path class="d36s5v8ph"/><path class="qxc99_b7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hot-air-balloon"} {...others} />);
}

export default Component;
