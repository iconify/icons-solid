import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/h/h067g9b7u.css';
import '../../css/l/lkryn-bwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="h067g9b7u"/><path clip-rule="evenodd" class="lkryn-bwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:grinder-duo"} {...others} />);
}

export default Component;
