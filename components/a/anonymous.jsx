import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ry75hqbrt.css';
import '../../css/f/f77y4qmye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ry75hqbrt"/><path class="f77y4qmye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:anonymous"} {...others} />);
}

export default Component;
