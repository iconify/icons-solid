import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kmwml-5pk.css';
import '../../css/g/gz5q0zrux.css';
import '../../css/l/ln4xjrx4e.css';
import '../../css/x/x4e1woonj.css';
import '../../css/o/oobzc-77t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kmwml-5pk"/><path class="gz5q0zrux wm-a"/><path class="ln4xjrx4e wm-a"/><path class="x4e1woonj"/><path class="oobzc-77t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bauble-duo"} {...others} />);
}

export default Component;
