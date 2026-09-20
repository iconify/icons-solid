import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm1b0-4mg.css';
import '../../css/z/zfpx72qbe.css';
import '../../css/l/l1b52uzek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hm1b0-4mg"/><path clip-rule="evenodd" class="zfpx72qbe"/><path class="l1b52uzek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bomb3"} {...others} />);
}

export default Component;
