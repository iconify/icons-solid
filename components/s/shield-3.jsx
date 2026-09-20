import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzn75-sia.css';
import '../../css/l/lvyhgdb0w.css';
import '../../css/g/g3x18gbzi.css';
import '../../css/m/mk0pambyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yzn75-sia"/><path class="lvyhgdb0w"/><path class="g3x18gbzi"/><path class="mk0pambyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shield-3"} {...others} />);
}

export default Component;
