import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dardc0b9t.css';
import '../../css/p/p12fkv6om.css';
import '../../css/j/jy7zlrluk.css';
import '../../css/f/fri9eob9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dardc0b9t"/><path class="p12fkv6om"/><path class="jy7zlrluk"/><path class="fri9eob9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:drawer-4"} {...others} />);
}

export default Component;
