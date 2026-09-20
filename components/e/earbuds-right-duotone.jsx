import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cac2avbop.css';
import '../../css/k/ka3skv-fj.css';
import '../../css/t/tzbg7abcv.css';
import '../../css/w/wewkxubqx.css';
import '../../css/h/hjdunxbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cac2avbop"/><path clip-rule="evenodd" class="ka3skv-fj"/><path class="tzbg7abcv"/><path clip-rule="evenodd" class="wewkxubqx"/><path clip-rule="evenodd" class="hjdunxbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-right-duotone"} {...others} />);
}

export default Component;
