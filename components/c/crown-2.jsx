import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7m-xtbun.css';
import '../../css/m/m8p6f_bpl.css';
import '../../css/x/xra_wvbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i7m-xtbun"/><path class="m8p6f_bpl"/><path class="xra_wvbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:crown-2"} {...others} />);
}

export default Component;
