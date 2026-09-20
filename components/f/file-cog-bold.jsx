import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fol091bdj.css';
import '../../css/t/t14sqbkgb.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fol091bdj"/><path clip-rule="evenodd" class="t14sqbkgb"/><path class="c73t34bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-cog-bold"} {...others} />);
}

export default Component;
