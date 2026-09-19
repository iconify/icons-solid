import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obir_rbzj.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q54sijbvz.css';
import '../../css/g/gk-pjnbnj.css';
import '../../css/w/w062cdc4b.css';
import '../../css/e/ee79eq2hx.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGyKCt0GdF"><path class="obir_rbzj"/></clipPath></defs><g clip-path="url(#SVGyKCt0GdF)" transform="translate(-37.3)scale(.72249)" class="d2kvgvbvc"><path class="q54sijbvz"/><path class="gk-pjnbnj"/><path class="w062cdc4b"/><path class="ee79eq2hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pr-1x1"} {...others} />);
}

export default Component;
