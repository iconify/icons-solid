import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y41bx3bct.css';
import '../../css/m/muu_xxs-n.css';
import '../../css/d/dq0jtabzt.css';
import '../../css/i/ibklc10fv.css';
import '../../css/i/i-81dybez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y41bx3bct"/><path class="muu_xxs-n"/><path class="dq0jtabzt"/><path class="ibklc10fv"/><path class="i-81dybez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:composition-window-human"} {...others} />);
}

export default Component;
