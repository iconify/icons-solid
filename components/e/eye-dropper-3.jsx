import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cseee7_no.css';
import '../../css/y/y-21-mb8q.css';
import '../../css/p/p11t_vb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cseee7_no"/><path class="y-21-mb8q"/><path class="p11t_vb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:eye-dropper-3"} {...others} />);
}

export default Component;
