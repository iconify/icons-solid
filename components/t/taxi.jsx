import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otiz8qbou.css';
import '../../css/s/s2qmknl-c.css';
import '../../css/b/bz-nx6b1k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="otiz8qbou"/><path class="s2qmknl-c"/><path clip-rule="evenodd" class="bz-nx6b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:taxi"} {...others} />);
}

export default Component;
