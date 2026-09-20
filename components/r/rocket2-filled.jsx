import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3upkwxda.css';
import '../../css/o/ojr8p6euu.css';
import '../../css/c/cz0tlabfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i3upkwxda"/><path class="ojr8p6euu"/><path clip-rule="evenodd" class="cz0tlabfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:rocket2-filled"} {...others} />);
}

export default Component;
