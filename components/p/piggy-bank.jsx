import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz874w1dw.css';
import '../../css/i/ig0wdx19m.css';
import '../../css/w/w3dw92y9d.css';
import '../../css/p/pxm9z0bks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hz874w1dw"/><path class="ig0wdx19m"/><path class="w3dw92y9d"/><path class="pxm9z0bks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:piggy-bank"} {...others} />);
}

export default Component;
