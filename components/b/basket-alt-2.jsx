import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eju5htbog.css';
import '../../css/k/k2qwikbxh.css';
import '../../css/h/hn_hazjoy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eju5htbog"/><path clip-rule="evenodd" class="k2qwikbxh"/><path class="hn_hazjoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:basket-alt-2"} {...others} />);
}

export default Component;
