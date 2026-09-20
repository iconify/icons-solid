import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m-9hukb0h.css';
import '../../css/r/rg85h1bjt.css';
import '../../css/y/yq35egede.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m-9hukb0h"/><path class="rg85h1bjt"/><path class="yq35egede"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-basket-favorite-star"} {...others} />);
}

export default Component;
