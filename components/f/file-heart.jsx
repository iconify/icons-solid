import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zr82e6b_c.css';
import '../../css/m/m2r2ijbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zr82e6b_c"/><path class="m2r2ijbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-heart"} {...others} />);
}

export default Component;
