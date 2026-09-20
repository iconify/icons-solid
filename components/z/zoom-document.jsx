import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y17f7bdea.css';
import '../../css/y/yp_pvo-oy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y17f7bdea"/><path class="yp_pvo-oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:zoom-document"} {...others} />);
}

export default Component;
