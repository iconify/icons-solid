import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lzq447bpg.css';
import '../../css/i/iw84g7bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lzq447bpg"/><path class="iw84g7bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:time-daily-1"} {...others} />);
}

export default Component;
