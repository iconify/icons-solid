import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dz424tbrl.css';
import '../../css/a/a39ak9bra.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="dz424tbrl"/><path class="a39ak9bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:tablet"} {...others} />);
}

export default Component;
