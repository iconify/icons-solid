import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbnt46byn.css';
import '../../css/e/ettm1db8d.css';
import '../../css/w/w3qym623v.css';
import '../../css/i/idtlix8ae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbnt46byn"/><path class="ettm1db8d"/><path class="w3qym623v"/><path class="idtlix8ae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cloud-data-transfer"} {...others} />);
}

export default Component;
