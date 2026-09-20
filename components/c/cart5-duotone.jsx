import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y05o5vb9o.css';
import '../../css/q/qo3t9ndci.css';
import '../../css/h/hin_m4g8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y05o5vb9o"/><path class="qo3t9ndci"/><path clip-rule="evenodd" class="hin_m4g8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart5-duotone"} {...others} />);
}

export default Component;
