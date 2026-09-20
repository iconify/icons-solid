import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7sa9db3f.css';
import '../../css/c/c9p1s4b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p7sa9db3f"/><path class="c9p1s4b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-line-duotone"} {...others} />);
}

export default Component;
