import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mr7zqwbog.css';
import '../../css/u/usal8xb7u.css';
import '../../css/p/ph9bfgb1s.css';
import '../../css/v/vde5abbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mr7zqwbog"/><path class="usal8xb7u"/><path class="ph9bfgb1s"/><path class="vde5abbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:network-connection-locked"} {...others} />);
}

export default Component;
