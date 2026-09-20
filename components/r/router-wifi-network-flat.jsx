import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wwoto2b7e.css';
import '../../css/o/ol9y5c9kd.css';
import '../../css/w/w3exxgbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wwoto2b7e"/><path class="ol9y5c9kd"/><path class="w3exxgbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:router-wifi-network-flat"} {...others} />);
}

export default Component;
