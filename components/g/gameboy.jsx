import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qd8049_dv.css';
import '../../css/e/efopjv1cm.css';
import '../../css/z/z0i4lz73h.css';
import '../../css/t/t_319yzks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qd8049_dv"/><path class="efopjv1cm"/><path class="z0i4lz73h"/><path class="t_319yzks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:gameboy"} {...others} />);
}

export default Component;
