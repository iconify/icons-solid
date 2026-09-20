import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdpjahb5e.css';
import '../../css/n/nynmpdblc.css';
import '../../css/e/etzgkcljo.css';
import '../../css/h/h-vaj-b4v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};
const content = `<g class="cuyn6tgcc"><path class="fdpjahb5e"/><circle class="nynmpdblc"/><circle class="etzgkcljo"/><path class="h-vaj-b4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:reddit"} {...others} />);
}

export default Component;
