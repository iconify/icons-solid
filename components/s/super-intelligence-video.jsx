import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yywirvbtg.css';
import '../../css/j/jar8vstvf.css';
import '../../css/m/m8zuw9b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yywirvbtg"/><path class="jar8vstvf"/><path class="m8zuw9b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-video"} {...others} />);
}

export default Component;
