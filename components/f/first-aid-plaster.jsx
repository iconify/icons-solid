import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3_e41z0g.css';
import '../../css/t/tp4fe0uik.css';
import '../../css/u/uufbd19qv.css';
import '../../css/x/x4fswytty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h3_e41z0g"/><path class="tp4fe0uik"/><path class="uufbd19qv"/><path class="x4fswytty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:first-aid-plaster"} {...others} />);
}

export default Component;
