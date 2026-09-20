import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5g_42bun.css';
import '../../css/b/b0k0uuwhg.css';
import '../../css/n/neqh-tgow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s5g_42bun"/><path clip-rule="evenodd" class="b0k0uuwhg"/><path class="neqh-tgow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-wide-filled"} {...others} />);
}

export default Component;
