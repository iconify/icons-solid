import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i6jo9jcep.css';
import '../../css/b/bxximwbyx.css';
import '../../css/m/mv-hq9vel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i6jo9jcep"/><path class="bxximwbyx"/><path class="mv-hq9vel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:material-and-texture"} {...others} />);
}

export default Component;
