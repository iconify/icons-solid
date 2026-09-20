import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxljfzfju.css';
import '../../css/y/y11o17bra.css';
import '../../css/p/prm4c2bvi.css';
import '../../css/u/uhb-smb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hxljfzfju"/><path class="y11o17bra"/><path class="prm4c2bvi"/><path class="uhb-smb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:logout-1"} {...others} />);
}

export default Component;
