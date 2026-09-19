import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8e65yb1h.css';
import '../../css/g/gjf3z3b0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y8e65yb1h"/><path class="gjf3z3b0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-plus-corner"} {...others} />);
}

export default Component;
