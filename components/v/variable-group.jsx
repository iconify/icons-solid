import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyu89abgp.css';
import '../../css/x/xifm1i_um.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="cyu89abgp"/><path clip-rule="evenodd" class="xifm1i_um"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:variable-group"} {...others} />);
}

export default Component;
