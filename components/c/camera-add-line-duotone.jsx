import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvdn8gb_z.css';
import '../../css/z/zek-ufbop.css';
import '../../css/m/mw2j0bfon.css';
import '../../css/u/u4qnnrb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bvdn8gb_z"/><path class="zek-ufbop"/><path class="mw2j0bfon"/><path class="u4qnnrb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-add-line-duotone"} {...others} />);
}

export default Component;
