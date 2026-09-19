import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdqlhjbof.css';
import '../../css/m/mpqzm5b1d.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="fdqlhjbof"/><path class="mpqzm5b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:toolbox"} {...others} />);
}

export default Component;
