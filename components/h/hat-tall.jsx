import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggx9pmbir.css';
import '../../css/x/xdv--4bog.css';
import '../../css/q/qj6g5kc3i.css';
import '../../css/t/thg-y0h3c.css';
import '../../css/t/tzrwp7f3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ggx9pmbir"/><path class="xdv--4bog"/><path class="qj6g5kc3i"/><path class="thg-y0h3c"/><path class="tzrwp7f3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:hat-tall"} {...others} />);
}

export default Component;
