import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vy6frvpsh.css';
import '../../css/l/ltxit21ma.css';
import '../../css/z/z9j_ljb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vy6frvpsh"/><path class="ltxit21ma"/><path class="z9j_ljb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shopping-basket-remove-flat"} {...others} />);
}

export default Component;
