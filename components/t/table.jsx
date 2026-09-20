import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk632zb5d.css';
import '../../css/i/ihsa2z0qc.css';
import '../../css/c/c1g_44k3a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tk632zb5d"/><path class="ihsa2z0qc"/><path class="c1g_44k3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:table"} {...others} />);
}

export default Component;
