import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/we9bzfb3x.css';
import '../../css/v/vyo2c1b7n.css';
import '../../css/o/owdh_1sjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="we9bzfb3x"/><path class="vyo2c1b7n"/><path class="owdh_1sjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cloud-network-1"} {...others} />);
}

export default Component;
