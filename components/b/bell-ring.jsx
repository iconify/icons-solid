import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upzcu-biu.css';
import '../../css/q/qz6h_ebto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="upzcu-biu"/><path clip-rule="evenodd" class="qz6h_ebto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bell-ring"} {...others} />);
}

export default Component;
