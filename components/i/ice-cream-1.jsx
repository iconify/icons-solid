import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htbvvgq7j.css';
import '../../css/e/edl3wgbnd.css';
import '../../css/q/qyxdovbor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="htbvvgq7j"/><path class="edl3wgbnd"/><path class="qyxdovbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ice-cream-1"} {...others} />);
}

export default Component;
