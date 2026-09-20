import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnw53uboj.css';
import '../../css/h/h5vc5jbye.css';
import '../../css/w/wqwixuz1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pnw53uboj"/><path class="h5vc5jbye"/><path class="wqwixuz1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:monitor-phone-duotone"} {...others} />);
}

export default Component;
