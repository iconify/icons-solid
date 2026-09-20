import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vchse2bmr.css';
import '../../css/n/n7oztbbat.css';
import '../../css/e/ebzbuu97s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vchse2bmr"/><path class="n7oztbbat"/><path class="ebzbuu97s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-cash-bill"} {...others} />);
}

export default Component;
