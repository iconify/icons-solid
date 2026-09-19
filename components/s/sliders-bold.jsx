import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uk3ezf1jl.css';
import '../../css/z/zi9dfiz4r.css';
import '../../css/o/ocvzv_b9j.css';
import '../../css/o/o85zjk0zp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="uk3ezf1jl"/><rect class="zi9dfiz4r"/><rect class="ocvzv_b9j"/><rect class="o85zjk0zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sliders-bold"} {...others} />);
}

export default Component;
