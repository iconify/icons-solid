import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c38jz1bub.css';
import '../../css/b/b3gp8zbvg.css';
import '../../css/w/wqsjcy92r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c38jz1bub"/><path class="b3gp8zbvg"/><path class="wqsjcy92r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-bag-bold-duotone"} {...others} />);
}

export default Component;
