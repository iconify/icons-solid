import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w8ab97v2n.css';
import '../../css/k/kcvvg0a8o.css';
import '../../css/k/kkgxl-zeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w8ab97v2n"/><path class="kcvvg0a8o"/><path class="kkgxl-zeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:menu-navigation-horizontal"} {...others} />);
}

export default Component;
