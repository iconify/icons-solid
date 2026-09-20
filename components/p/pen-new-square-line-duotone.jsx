import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p0hhklb3f.css';
import '../../css/g/g7zku0btl.css';
import '../../css/q/qairory2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p0hhklb3f"/><path class="g7zku0btl"/><path class="qairory2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-square-line-duotone"} {...others} />);
}

export default Component;
