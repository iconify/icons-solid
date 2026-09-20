import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk4llbc2g.css';
import '../../css/s/svszzub0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bk4llbc2g"/><path class="svszzub0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:link"} {...others} />);
}

export default Component;
