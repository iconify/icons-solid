import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evq1l3bzp.css';
import '../../css/c/cgrn-n44o.css';
import '../../css/l/l_8bueb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="evq1l3bzp"/><path clip-rule="evenodd" class="cgrn-n44o"/><path class="l_8bueb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-money-filled"} {...others} />);
}

export default Component;
