import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sq2ltrr7i.css';
import '../../css/b/b6we8-e-p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="sq2ltrr7i"/><path class="b6we8-e-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:gobot"} {...others} />);
}

export default Component;
