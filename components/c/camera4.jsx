import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fp6zikbhq.css';
import '../../css/t/tyll-4bpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fp6zikbhq"/><path class="tyll-4bpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera4"} {...others} />);
}

export default Component;
