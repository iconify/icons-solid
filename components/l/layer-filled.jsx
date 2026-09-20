import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvodcjc8y.css';
import '../../css/d/dm99q5byf.css';
import '../../css/u/ugktm2bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vvodcjc8y"/><path class="dm99q5byf"/><path class="ugktm2bbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layer-filled"} {...others} />);
}

export default Component;
