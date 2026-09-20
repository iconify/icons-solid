import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/emph6bbay.css';
import '../../css/q/q7xl0t2wz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="emph6bbay"/><path class="q7xl0t2wz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-web-form-drop-down-menu-form-3"} {...others} />);
}

export default Component;
