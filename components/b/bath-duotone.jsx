import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v337hcc-y.css';
import '../../css/d/dsfc-koya.css';
import '../../css/g/gjxj3tdsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v337hcc-y"/><path class="dsfc-koya"/><path class="gjxj3tdsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bath-duotone"} {...others} />);
}

export default Component;
