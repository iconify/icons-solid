import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klrv-db_n.css';
import '../../css/e/e0nskpb9u.css';
import '../../css/k/kcj5x25te.css';
import '../../css/q/q2hd1tb1p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="klrv-db_n"/><path class="e0nskpb9u"/><path class="kcj5x25te"/><path class="q2hd1tb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gameboy"} {...others} />);
}

export default Component;
