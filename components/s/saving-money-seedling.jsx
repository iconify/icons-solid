import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rmzlaacmz.css';
import '../../css/u/uc0ced3xe.css';
import '../../css/y/yt_spx0-o.css';
import '../../css/f/fjf51v-lh.css';
import '../../css/e/elx-v3mgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rmzlaacmz"/><path class="uc0ced3xe"/><path class="yt_spx0-o"/><path class="fjf51v-lh"/><path class="elx-v3mgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:saving-money-seedling"} {...others} />);
}

export default Component;
