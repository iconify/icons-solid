import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nok9es6en.css';
import '../../css/f/fuvaydbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nok9es6en"/><path class="fuvaydbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:crop-rotate-tr"} {...others} />);
}

export default Component;
