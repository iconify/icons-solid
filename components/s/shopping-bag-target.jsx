import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nom3uiaev.css';
import '../../css/q/qphn1cb0k.css';
import '../../css/u/u0vpbrtxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nom3uiaev"/><path class="qphn1cb0k"/><path class="u0vpbrtxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-bag-target"} {...others} />);
}

export default Component;
