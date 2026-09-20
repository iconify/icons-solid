import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjlx0k8it.css';
import '../../css/s/sr4fnxk3f.css';
import '../../css/m/mo7m3ob5s.css';
import '../../css/c/cucx9cczf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zjlx0k8it"/><path class="sr4fnxk3f"/><path class="mo7m3ob5s"/><path class="cucx9cczf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:headphones5-filled"} {...others} />);
}

export default Component;
