import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owcgvxbrw.css';
import '../../css/z/zs9t6tbda.css';
import '../../css/a/asax6dbwr.css';
import '../../css/c/cn3dkgbwg.css';
import '../../css/z/zg3tycboc.css';
import '../../css/m/mc9xiqbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="owcgvxbrw"/><path class="zs9t6tbda"/><path class="asax6dbwr"/><path class="cn3dkgbwg"/><path class="zg3tycboc"/><path class="mc9xiqbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-ordered-bold"} {...others} />);
}

export default Component;
