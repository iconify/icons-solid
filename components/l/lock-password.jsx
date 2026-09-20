import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2mugkbcy.css';
import '../../css/k/kk7pygdty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z2mugkbcy"/><path clip-rule="evenodd" class="kk7pygdty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-password"} {...others} />);
}

export default Component;
