import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f44_mnbui.css';
import '../../css/k/kxm009byi.css';
import '../../css/z/zb5u0ulau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f44_mnbui"/><path class="kxm009byi"/><path clip-rule="evenodd" class="zb5u0ulau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plus-minus-duotone"} {...others} />);
}

export default Component;
