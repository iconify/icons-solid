import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojn79wy9w.css';
import '../../css/z/zy9imda8d.css';
import '../../css/b/b_nkvm26v.css';
import '../../css/b/b_r0u5tbo.css';

const viewBox = {"width":655,"height":264};
const content = `<g class="ft5dv1b6b"><path class="ojn79wy9w"/><path class="zy9imda8d"/><path class="b_nkvm26v"/><path class="b_r0u5tbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uxuy"} {...others} />);
}

export default Component;
