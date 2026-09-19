import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4ni3-bvv.css';
import '../../css/a/amfm1tp9u.css';
import '../../css/e/ey_mdybwj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="z4ni3-bvv"/><path class="amfm1tp9u"/><path class="ey_mdybwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:server"} {...others} />);
}

export default Component;
