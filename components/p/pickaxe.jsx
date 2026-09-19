import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-9spq4rx.css';
import '../../css/r/r_d9eersx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="a-9spq4rx"/><path class="r_d9eersx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:pickaxe"} {...others} />);
}

export default Component;
