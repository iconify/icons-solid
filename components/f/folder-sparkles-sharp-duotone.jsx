import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zr2nxeb2j.css';
import '../../css/u/urdmwybfb.css';
import '../../css/w/w79zl5b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zr2nxeb2j"/><path class="urdmwybfb"/><path class="w79zl5b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
