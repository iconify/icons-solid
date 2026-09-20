import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rs7apxeqd.css';
import '../../css/m/mguyo9biy.css';
import '../../css/o/oqagr1bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rs7apxeqd"/><path class="mguyo9biy"/><path class="oqagr1bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:product-launch-laptop"} {...others} />);
}

export default Component;
