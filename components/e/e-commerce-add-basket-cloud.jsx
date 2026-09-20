import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rbpmfzz7c.css';
import '../../css/m/mryjlfbzm.css';
import '../../css/d/dj2e535im.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rbpmfzz7c"/><path class="mryjlfbzm"/><path class="dj2e535im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:e-commerce-add-basket-cloud"} {...others} />);
}

export default Component;
