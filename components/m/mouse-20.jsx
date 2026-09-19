import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rcsj_abfu.css';
import '../../css/z/zg5fcjbls.css';
import '../../css/v/v4a1nrb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rcsj_abfu"/><path class="zg5fcjbls"/><path class="v4a1nrb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-20"} {...others} />);
}

export default Component;
