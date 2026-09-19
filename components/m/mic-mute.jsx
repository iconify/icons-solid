import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1cu7h-rg.css';
import '../../css/c/cumd4_c6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i1cu7h-rg"/><path class="cumd4_c6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mic-mute"} {...others} />);
}

export default Component;
