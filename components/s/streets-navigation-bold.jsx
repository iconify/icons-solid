import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zntbuyb6q.css';
import '../../css/z/za3m3bpbb.css';
import '../../css/z/z3nkyquqv.css';
import '../../css/d/de7w1bc6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zntbuyb6q"/><path class="za3m3bpbb"/><path class="z3nkyquqv"/><path class="de7w1bc6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-bold"} {...others} />);
}

export default Component;
