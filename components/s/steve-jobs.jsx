import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6y8-wbpg.css';
import '../../css/z/z-xvo-b6l.css';
import '../../css/p/phhcty3eu.css';
import '../../css/d/dbixr8rom.css';
import '../../css/v/vewef4qlq.css';
import '../../css/a/a85atbc8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w6y8-wbpg"/><path class="z-xvo-b6l"/><path class="phhcty3eu"/><path class="dbixr8rom"/><path class="vewef4qlq"/><path class="a85atbc8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:steve-jobs"} {...others} />);
}

export default Component;
