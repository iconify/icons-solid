import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r-h_snbkr.css';
import '../../css/t/tjbwptb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r-h_snbkr"/><path class="tjbwptb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:alarm"} {...others} />);
}

export default Component;
