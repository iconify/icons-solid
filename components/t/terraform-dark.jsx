import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/t/twdsh1b5k.css';
import '../../css/i/iz89bvbzi.css';
import '../../css/k/ki54dl-uc.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="twdsh1b5k"/><path clip-rule="evenodd" class="iz89bvbzi"/><path clip-rule="evenodd" class="ki54dl-uc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:terraform-dark"} {...others} />);
}

export default Component;
