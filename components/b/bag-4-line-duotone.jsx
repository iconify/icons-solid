import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a9qq5obmi.css';
import '../../css/g/ghi5_wb7c.css';
import '../../css/z/zr846pb6r.css';
import '../../css/y/yigrcjbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a9qq5obmi"/><path class="ghi5_wb7c"/><path class="zr846pb6r"/><path class="yigrcjbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-4-line-duotone"} {...others} />);
}

export default Component;
