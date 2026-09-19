import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gx-8gccxv.css';
import '../../css/h/hh2dj9bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gx-8gccxv"/><path class="hh2dj9bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-expand"} {...others} />);
}

export default Component;
