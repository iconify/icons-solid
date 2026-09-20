import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svy7-6bax.css';
import '../../css/d/ds-_4vmnv.css';
import '../../css/f/fjgw22b1v.css';
import '../../css/l/li5zs-a-i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="svy7-6bax"/><path class="ds-_4vmnv"/><path class="fjgw22b1v"/><path class="li5zs-a-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:script-2"} {...others} />);
}

export default Component;
