import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ne00ukbgp.css';
import '../../css/o/o4zjqdqds.css';
import '../../css/z/z6nfzqklw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ne00ukbgp"/><path class="o4zjqdqds"/><path class="z6nfzqklw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:user-group-line"} {...others} />);
}

export default Component;
